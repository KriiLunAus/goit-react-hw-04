import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchPhotosWithQuery from "../src/photos-api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import Loader from "./components/Loader/Loader.jsx";



const App = () => {

  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imgId, setImgId] = useState("")

      useEffect(() => {
        if (query !== "") {
  
          async function fetchPhotos() {
            try {
              
              setError(false)
              setLoading(true);
              
              await new Promise(resolve => setTimeout(resolve, 1000));
              
              const data = await fetchPhotosWithQuery(query, currentPage);
              
              
              setPhotos(prevPhotos => [...prevPhotos, ...data]);
              
            } catch (error) {
              setError(true);
            } finally {
              setLoading(false);
            }
          }
          fetchPhotos();
          
        }
        }, [query, currentPage])
        
  const handleSubmit = inputValue => {
    setQuery(
      inputValue.query);
    setCurrentPage(1);
    setPhotos([])
  }

  const handleLoadMore = () => {
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

      {query && <LoadMoreBtn onClick={handleLoadMore } />}
      <ImageModal photos={photos} imgId={imgId} onClose={closeModal} modalIsOpen={modalIsOpen} />
    </>
  )
};



export default App;