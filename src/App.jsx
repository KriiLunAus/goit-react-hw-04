import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchPhotosWithQuery from "../src/photos-api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { DNA } from 'react-loader-spinner';
import Modal from 'react-modal';

const App = () => {

  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {

  async function fetchPhoto() {
    try {
      
      
      setLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));

      const data = await fetchPhotosWithQuery(query);


      setPhotos(data);
      
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  fetchPhoto();

  }, [query,])
  

  const handleSubmit = inputValue => {
    setQuery(inputValue.query)
  }
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
  {loading && <DNA
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
        />}

      </div>
      {error && <p>Oops, something went wrong</p>}
      {photos.length > 0 &&<ImageGallery  photos={photos} />}
    </>
  )
};



export default App;