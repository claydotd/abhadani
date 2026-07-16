import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import photolibrary from "../../content/photography/photos.json"

export default function Photography() {
    return(
        <div className="container page">
            <h1>Photography</h1>
            <RowsPhotoAlbum photos={photolibrary} targetRowHeight={300} rowConstraints={{ singleRowMaxHeight: 250 }} />
        </div>
    )
}