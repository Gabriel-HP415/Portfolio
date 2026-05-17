/** Public folder asset with correct base for GitHub Pages / Vercel */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\//, '')
  return `${base}${normalized}`
}
