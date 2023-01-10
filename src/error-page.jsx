import { useRouteError } from "react-router-dom"; {/* cmd + arrow to go end to end, option + arrow to go word to word, add shift to highlight */}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return(
    <div id="error-page">
      <h1>oops!</h1>
      <p>we fucked up! this is not available rn sowwy (◕︵◕)</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}


