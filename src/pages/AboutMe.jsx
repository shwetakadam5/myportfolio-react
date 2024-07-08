import Avatar from "react-avatar";
import avatarWoman from "../assets/woman.png";
export default function AboutMe() {
  return (
    <div id="aboutme">
      <p>About Me</p>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.
      </p>
    </div>
  );
}
