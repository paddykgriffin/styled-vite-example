export const slugify = (str: string) =>
  str.trim().toLowerCase().replace(/\s+/g, '-');