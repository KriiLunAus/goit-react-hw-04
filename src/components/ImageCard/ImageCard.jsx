import css from "./ImageCard.module.css"


const ImageCard = ({links, alt, likes, user}) => {
    
    return (
        <div className={css.element} >
            <img src={links.small} alt={alt} />
            <p>Author: { user.name }</p>
            <p>Likes: { likes }</p>

        </div>
    )
}


export default ImageCard;