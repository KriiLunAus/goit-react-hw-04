import axios from "axios";

const api_key = "Xq6Cb4oIUXC1RuptGDHSRwyh-ocDIUz4iU2ePjbzM-U";



 const fetchPhotosWithQuery = async (request, currentPage) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${api_key}&query=${request}&page=${currentPage}`)

     return response.data.results;
     
}
export default fetchPhotosWithQuery;