import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchPhotosWithQuery from "../src/photos-api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";



const App = () => {

  const [photos, setPhotos] = useState([]);     // array with data
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");         // query for input
  const [currentPage, setCurrentPage] = useState(1);    
  const [modalIsOpen, setIsOpen] = useState(false);   
  const [imgId, setImgId] = useState("");
  const [newPagesAvaliable, setNewPagesAvaliable] = useState("true");

      useEffect(() => {
        if (query !== "" ) {
  
          async function fetchPhotos() {
            try {
              
              setError(false)
              setLoading(true);
              
              
              await new Promise(resolve => setTimeout(resolve, 1000));    // makes timeout for loader
              
              const data = await fetchPhotosWithQuery(query, currentPage);
              setNewPagesAvaliable((data.total_pages >= currentPage))
console.log(data)
              setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
              
            } catch (error) {
              setError(true);
            } finally {
              setLoading(false);
            }
          }
          fetchPhotos();
          
        }
        }, [query, currentPage])
        
  const handleSubmit = inputValue => {     // function on submit form
    setQuery(
      inputValue.query);                    //set query state
    setCurrentPage(1);                      //set page to first
    setPhotos([])                           // remove all from photos array
  }

  const handleLoadMore = () => {          // function for loadMoreBtn
  setCurrentPage(prevPage => prevPage + 1);
  };
  
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onModal = (imageId) => {
    setImgId(imageId);
    openModal()
}
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Loader loading={loading}/>
      {error && <ErrorElement />}


      {photos.length > 0 &&<ImageGallery  onModal={onModal}  photos={photos} />}

      {query && newPagesAvaliable && <LoadMoreBtn onClick={handleLoadMore } />}
      {!newPagesAvaliable && <p style={{ color: "white", padding: "50px"}}>There are no other photo. Try another request</p>}
      <ImageModal photos={photos} imgId={imgId} onClose={closeModal} modalIsOpen={modalIsOpen} />
    </>
  )
};



export default App;