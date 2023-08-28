import { checkResponse, moviesUrl } from "./constants";

export const getAllMovies = () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${moviesUrl}/beatfilm-movies`, requestOptions).then(checkResponse);
};

