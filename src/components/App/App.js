import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "../MoviesCardList/MoviesCardList.css";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggeIn, setIsLoggeIn] = useState(true);
  const location = useLocation();
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];
  const shouldShowHeader = headerPaths.includes(location.pathname);
  const shouldShowFooter = footerPaths.includes(location.pathname);
  return (
    <div className="App">
      <div className="page">
        {shouldShowHeader && <Header isLoggeIn={isLoggeIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {shouldShowFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;