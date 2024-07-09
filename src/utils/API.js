// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
  axios.get(`https://api.github.com/users/${query}/repos`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
