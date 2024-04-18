import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchPhotosWithQuery from "../src/photos-api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { DNA } from 'react-loader-spinner';
import Modal from 'react-modal';
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

Modal.setAppElement('#root');


const App = () => {

  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }





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
  }

  const handleLoadMore = () => {
  setCurrentPage(prevPage => prevPage + 1);
};
  
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
          {loading && <DNA
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />}
      </div>

      {error && <ErrorElement />}

      {photos.length > 0 &&<ImageGallery  photos={photos} />}

      {query && <LoadMoreBtn onClick={handleLoadMore } />}
      <ImageModal onOpen={openModal} onClose={closeModal} modalIsOpen={modalIsOpen} />
    </>
  )
};



export default App;