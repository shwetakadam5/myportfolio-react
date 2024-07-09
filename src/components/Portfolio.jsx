import { useState, useEffect } from "react";
import PortfolioResultList from "./UI/PortfolioResultList";
import projectImage1 from "../assets/projectimage1.jpg";
import projectImage2 from "../assets/projectimage2.jpg";
import projectImage3 from "../assets/projectimage3.jpg";
import projectImage4 from "../assets/projectimage4.jpg";
import projectImage5 from "../assets/projectimage5.jpg";
import projectImage6 from "../assets/projectimage6.jpg";

import search from "../utils/API";
export default function Portfolio() {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  let arrayOfImages = [];

  arrayOfImages.push(projectImage1);
  arrayOfImages.push(projectImage2);
  arrayOfImages.push(projectImage3);
  arrayOfImages.push(projectImage4);
  arrayOfImages.push(projectImage5);
  arrayOfImages.push(projectImage6);

  // Method to get search results and set state
  const searchPortfolio = async (query) => {
    const { data } = await search(query);

    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const projectsToDisplay = data.slice(0, 6);
    const dataToDisplay = [];
    for (let index = 0; index < projectsToDisplay.length; index++) {
      const element = projectsToDisplay[index];
      dataToDisplay.push({ ...element, projectimg: arrayOfImages[index] });
    }

    setResults(dataToDisplay);
  };

  useEffect(() => {
    searchPortfolio("shwetakadam5");
  }, []);

  return (
    <div id="portfolio-list">
      <h4>Portfolio</h4>
      <div id="portfolios">
        <PortfolioResultList results={results} />
      </div>
    </div>
  );
}
