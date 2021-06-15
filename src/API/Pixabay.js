import axios from 'axios';

const AUTHORIZATION_KEY = '?key=20328983-97c171d0912a39316d7306b5c';
const BASE_URL = `https://pixabay.com/api/`;

const fetchSearchImage = (query = '', pageNumber = 1) => {
  return axios
    .get(
      `${BASE_URL}${AUTHORIZATION_KEY}&q=${query}&page=${pageNumber}&image_type=photo&per_page=12`,
    )
    .then(response => response.data.hits);
};
export default fetchSearchImage;
