import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserContext } from "./services/CurrentUserContext/CurrentUserContext";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  const [state, setState] = useState({
    isAuth: false,
    userData: null,
    _id: null,
    savedMovies: []
  });
  return (
    <React.StrictMode>
      <CurrentUserContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </React.StrictMode>
  );
}
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
