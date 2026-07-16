import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
// import photolibrary from "../../content/photography/photos.json"

const photos = [
    { src: "../../content/photography/1-IMG_1169.jpg", width: 2048, height: 1365 },
    { src: "../../content/photography/2-IMG_1168.jpg", width: 2048, height: 1365 },
    { src: "../../content/photography/3-IMG_1144.jpg", width: 2048, height: 1365 },
    { src: "../../content/photography/4-IMG_1143.jpg", width: 2048, height: 1365 },
    { src: "../../content/photography/5-IMG_1119.jpg", width: 2048, height: 1365 }
    ];

export default function Photography() {
    return(
        <div className="container page">
            <h1>Photography</h1>
            <RowsPhotoAlbum photos={photos} targetRowHeight={300} rowConstraints={{ singleRowMaxHeight: 250 }} />
        </div>
    )
}