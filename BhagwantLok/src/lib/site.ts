export const SITE_URL = "https://divine-arrival-portal.lovable.app";

export const canonical = (path: string) =>
  `${SITE_URL}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** BreadcrumbList JSON-LD: Home → Divine Journeys → current page */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}
