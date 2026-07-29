const pageImages = import.meta.glob(
  '../../content/page-images/*.{jpeg,jpg,png,webp,gif}',
  { eager: true, import: 'default' },
) as Record<string, string>

export function findPageImage(pageName: string): string | null {
  const match = Object.keys(pageImages).find((filePath) =>
    filePath.match(new RegExp(`/${pageName}\\.(jpeg|jpg|png|webp|gif)$`)),
  )
  return match ? pageImages[match] : null
}
