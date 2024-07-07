import { useRouteError } from "react-router-dom";
import Nav from "../components/Nav";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Nav />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
