import { ColumnsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/columns.css'
import { galleryPhotos } from '../data/photos'

export default function Photography() {
  return (
    <div className="container page">
      <h1>Photography</h1>
      {galleryPhotos.length === 0 ? (
        <p className="empty-state">No photos yet.</p>
      ) : (
        <ColumnsPhotoAlbum
          photos={galleryPhotos}
          //columns={3}
          spacing={6}
          padding={0}
          componentsProps={{ container: { className: 'photo-album' } }}
        />
      )}
    </div>
  )
}
