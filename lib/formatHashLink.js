export function formatHashLink(slug) {
  if (typeof window !== "undefined") {
    return slug.toLowerCase().replace(/ /g, "-");
  }
}
