import { Link } from "react-router-dom";
import "../../App.css";
import social from "../../assets/social.png";

function PortfolioResultList(props) {
  return (
    <>
      {props.results.map((result) => (
        <div className="portfolio-container" key={result.id}>
          <img
            id="project-info"
            src={result.projectimg}
            alt="projectimage"
            className="projectimage"
            title="Image of project"
          />
          <div className="project-contents">
            <h6> {result.name}</h6>
            <p>
              <Link className="nav-link text-dark" to={result.html_url}>
                <img id="github-img" src={social} alt="Nature"></img>
              </Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PortfolioResultList;
