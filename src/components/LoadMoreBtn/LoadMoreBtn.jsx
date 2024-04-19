import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => {
    return (
    <div className={css.loadMoreWrapper}>
    <button  onClick={onClick}>Load more</button>
    </div>)
        
}
    
export default LoadMoreBtn;