import css from "./ImageCard.module.css"


const ImageCard = ({ onModal, links, alt, likes, user, id}) => {
    
    return (
        <div className={css.element} >
            <img onClick={()=> onModal(id)} src={links.small} alt={alt} />
            <p>Author: { user.name }</p>
            <p>Likes: { likes }</p>

        </div>
    )
}


export default ImageCard;