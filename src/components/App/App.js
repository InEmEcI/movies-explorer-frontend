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

function App() {
  const [isLoading, setLoading] = useState(false);
  const { state, setState } = useContext(CurrentUserContext);
  const token = getCookie("token");
  const location = useLocation();
  const headerPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPaths = ["/", "/movies", "/saved-movies"];
  const shouldShowHeader = headerPaths.includes(location.pathname);
  const shouldShowFooter = footerPaths.includes(location.pathname);

  useEffect(() => {
    if (token) {
      setLoading(true);
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
        .finally(() => setLoading(false));
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

  return state !== undefined ? (
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
                <Movies isLoading={isLoading} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute location={location} isAuth={state.isAuth}>
                <SavedMovies isLoading={isLoading} />
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
  ) : null;
}

export default App;
