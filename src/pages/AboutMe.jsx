import Avatar from "react-avatar";
import avatarWoman from "../assets/woman.png";
export default function AboutMe() {
  return (
    <div id="aboutme">
      <h4>About Me</h4>
      <div id="avatarimage">
        <Avatar
          //githubHandle="shwetakadam5"
          src={avatarWoman}
          name="Shweta Kadam Zutshi"
          size="100"
          round={true}
          initials={(name) =>
            name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
          }
        />
      </div>
      <div id="introduction">
        <p>
          I am a web application developer with working knowledge of HTML, CSS,
          Javascripts and advanced Java programming language frameworks like
          Struts, Springs, Hibernate, EJB 3.0, JPA across different platforms,
          database and Operating systems.
        </p>
        <br />
        <p>
          I have good knowledge in Banking, e-Banking, Payment messages and
          Credit card domains and experience in all SDLC phases of project
          including design, development, testing, debugging and maintenance of
          J2EE.
        </p>
        <br />
        <p>
          I am also an watercolor artist and when I am not coding , I am
          painting
        </p>
      </div>
    </div>
  );
}
