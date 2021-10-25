export function formatHashLink(slug: string) {
  if (typeof window !== 'undefined') {
    return slug.toLowerCase().replace(/ /g, '-');
  }
}
