import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { imageSize } from 'image-size'
import type { Plugin } from 'vite'

const VIRTUAL_ID = 'virtual:gallery-photos'
const RESOLVED_VIRTUAL_ID = '\0' + VIRTUAL_ID

const PHOTO_EXT = /\.(jpe?g|png|webp)$/i

function altFromPath(filePath: string): string {
  const filename = filePath.split('/').pop() ?? filePath
  const name = filename.replace(/\.[^.]+$/, '')
  const withoutOrder = name.replace(/^\d+-/, '')
  return withoutOrder.replace(/[-_]+/g, ' ').trim() || 'Photograph'
}

export function galleryPhotosPlugin(projectRoot: string): Plugin {
  return {
    name: 'gallery-photos',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_VIRTUAL_ID
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_ID) return

      const dir = join(projectRoot, 'content/photography')
      let files: string[] = []
      try {
        files = readdirSync(dir).filter((f) => PHOTO_EXT.test(f))
      } catch {
        files = []
      }
      files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

      const imports: string[] = []
      const entries: string[] = []

      files.forEach((filename, index) => {
        const absPath = join(dir, filename)
        const dimensions = imageSize(readFileSync(absPath))
        if (!dimensions.width || !dimensions.height) return

        imports.push(
          `import img${index} from ${JSON.stringify(absPath)}`,
        )
        entries.push(`{
  src: img${index},
  width: ${dimensions.width},
  height: ${dimensions.height},
  alt: ${JSON.stringify(altFromPath(filename))},
}`)
      })

      return `${imports.join('\n')}

export const galleryPhotos = [${entries.join(',\n')}]
`
    },
  }
}
