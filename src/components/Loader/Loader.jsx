import { Circles } from 'react-loader-spinner';
import css from "./Loader.module.css"

const Loader = ({ loading }) => {
    return (
         <div className={css.loaderWrapper}>
        
          {loading &&<Circles
  height="80"
  width="80"
  color="#fafafa"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />}
      </div>
    )
}

export default Loader;