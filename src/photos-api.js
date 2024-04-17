import axios from "axios";

const api_key = "Xq6Cb4oIUXC1RuptGDHSRwyh-ocDIUz4iU2ePjbzM-U";
const width = 400;
const height = 275;


 const fetchPhotosWithQuery = async request => {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${api_key}&query=${request}`)

     return response.data.results;
     
}
export default fetchPhotosWithQuery;