"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { NavigationItem } from "@/constants/navigation";

type UseActiveNavigationOptions = {
  items: NavigationItem[];
  homePath?: string;
};

export function useActiveNavigation({
  items,
  homePath = "/",
}: UseActiveNavigationOptions) {
  const pathname = usePathname();
  const routeActiveSectionId = useMemo(
    () => getRouteActiveSection(pathname, items) ?? "home",
    [items, pathname]
  );
  const [observedSectionId, setObservedSectionId] = useState(() =>
    typeof window === "undefined"
      ? "home"
      : window.location.hash.replace("#", "") || "home"
  );

  const sectionIds = useMemo(() => items.map((item) => item.sectionId), [items]);
  const isHomePage = pathname === homePath;
  const activeSectionId = isHomePage ? observedSectionId : routeActiveSectionId;

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const sectionId = visibleSections[0]?.target.id;

        if (sectionId) {
          setObservedSectionId(sectionId);
        }
      },
      {
        rootMargin: "-34% 0px -52% 0px",
        threshold: [0.12, 0.25, 0.45, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage, sectionIds]);

  useEffect(() => {
    const handleHashChange = () => {
      setObservedSectionId(window.location.hash.replace("#", "") || "home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return {
    activeSectionId,
    isActive: (item: NavigationItem) => activeSectionId === item.sectionId,
  };
}

function getRouteActiveSection(pathname: string, items: NavigationItem[]) {
  const matchedItem = items.find((item) =>
    item.routePatterns.some(
      (routePattern) =>
        pathname === routePattern || pathname.startsWith(`${routePattern}/`)
    )
  );

  return matchedItem?.sectionId;
}
