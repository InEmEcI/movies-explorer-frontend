import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../services/CurrentUserContext/CurrentUserContext";
import { getCookie } from "../../utils/cookie";
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
import { ProtectedRoute } from "../../services/ProtectedRoute/ProtectedRoute";
import { getAuthUserInfo, getSavedMovies } from "../../utils/MainApi";
import {getAllMovies} from "../../utils/MoviesApi"

function App() {

  const [state, setState] = useState({
    isAuth: false,
    userData: null,
    _id: null,
    savedMovies: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const token = getCookie("token");
  const location = useLocation();
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];
  const shouldShowHeader = headerPaths.includes(location.pathname);
  const shouldShowFooter = footerPaths.includes(location.pathname);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [isCheckboxSavedClicked, setIsCheckboxSavedClicked] = useState(false);
  const [allMovies, setAllMovies] = useState([]);


  useEffect(() => {
    if(localStorage.getItem("isShort") == null) {
      localStorage.setItem("isShort", 'false')
    }
    if(localStorage.getItem("isShort") == "false") {
      setIsCheckboxClicked(() => false);
    } else {
      setIsCheckboxClicked(() => true);
    }

    if (token) {
      getAllMovies()
      .then((res) => setAllMovies(res))
      .catch((err) => console.error(err));
      setIsLoading(true);
      getSavedMovies()
        .then((res) =>
          setState((prevState) => {
            return {
              ...prevState,
              savedMovies: res,
            };
          })
        )
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
      getAuthUserInfo()
        .then((res) => {
          const { name, email, _id } = res;

          setState((prevState) => {
            return {
              ...prevState,
              isAuth: true,
              userData: {
                email: email,
                name: name,
              },
              _id: _id,
            };
          });
        })
        .catch((err) => console.error(err));
    }
  }, [token]);
  const toggleCheckboxState = () => {
    setIsCheckboxClicked(!isCheckboxClicked);
    localStorage.setItem("isShort", !isCheckboxClicked);
  };

  const toggleCheckboxSaveState = () => {
    setIsCheckboxSavedClicked(!isCheckboxSavedClicked);
  };

  return state !== undefined ? (
    <CurrentUserContext.Provider value={{ state, setState }}>
      <div className="App">
        <div className="page">
          {shouldShowHeader && <Header isLoggeIn={state.isAuth} />}
          <Routes>
            <Route path="/signup" element={<Register location={location} />} />
            <Route path="/signin" element={<Login location={location} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute location={location} isAuth={state.isAuth}>
                  <Movies
                    allMovies={allMovies}
                    isLoading={isLoading}
                    setIsCheckboxClicked={toggleCheckboxState}
                    isCheckboxClicked={isCheckboxClicked}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute location={location} isAuth={state.isAuth}>
                  <SavedMovies
                    isLoading={isLoading}
                    setIsCheckboxClicked={toggleCheckboxSaveState}
                    isCheckboxClicked={isCheckboxSavedClicked}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute location={location} isAuth={state.isAuth}>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          {shouldShowFooter && <Footer />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  ) : null;
}

export default App;
