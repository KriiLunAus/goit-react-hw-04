import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"
const ImageGallery = ({ photos }) => {
    return (
        <div className={css.listWrapper}>
        <ul className={css.photoList}>
                {
                    photos.map(({ id, urls, alt_description, likes, user }) => {
                    return (
                        
                    <li key={id}>
                        <ImageCard links = {urls} alt = {alt_description} user={user}  likes = { likes } />
                    </li>
            )
                })}
              
        </ul>
        </div>
    )
}

export default ImageGallery;