import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

import "../../App.css";
import { coordinates, APIkey } from "../utils/constants";
import { signup, signin, checkToken } from "../utils/auth";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";
import EditProfileModal from "./EditProfileModal/EditProfileModal";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import AddItemModal from "./AddItemModal/AddItemModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal/ConfirmDeleteModal";
import ItemModal from "./ItemModal/ItemModal";
import Footer from "./Footer/Footer";
import { getWeather, defineWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import {
  getItems,
  addItem,
  deleteItem,
  updateUser,
  addCardLike,
  removeCardLike,
} from "../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleClose = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    signup({ email, password, name, avatar })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };

  const handleLogin = ({ email, password }) => {
    signin({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          handleClose();
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleUpdateUser = ({ name, avatar }) => {
    updateUser({ name, avatar })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleClose();
      })
      .catch((err) => {
        console.error("Update user error:", err);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    !isLiked
      ? addCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Token validation error:", err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    const newItem = { name, imageUrl, weather, _id: Date.now() };
    return addItem(newItem)
      .then((savedItem) => {
        setClothingItems([savedItem, ...clothingItems]);
        handleClose();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (card) => {
    deleteItem(card._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== card._id)
        );
        handleClose();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const definedData = defineWeatherData(data);
        setWeatherData(definedData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  const handleRequestDelete = (card) => {
    setActiveModal("");
    setItemToDelete(card);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      handleDeleteItem(itemToDelete);
      setShowDeleteConfirm(false);
      setItemToDelete(null);
    }
  };

   const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setItemToDelete(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Router>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="app">
            <div className="app__wrapper">
              <Header
                handleAddClick={handleAddClick}
                weatherData={weatherData}
                onToggleUnit={handleToggleSwitchChange}
                isLoggedIn={isLoggedIn}
                onLoginClick={() => setActiveModal("login")}
                onRegisterClick={() => setActiveModal("register")}
                onLogout={handleLogout}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      onCardLike={handleCardLike}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Profile
                        clothingItems={clothingItems}
                        onAddItemClick={handleAddClick}
                        onCardClick={handleCardClick}
                        weatherData={weatherData}
                        onEditProfileClick={handleEditProfileClick}
                        onCardLike={handleCardLike}
                        onLogout={handleLogout}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <RegisterModal
              isOpen={activeModal === "register"}
              onClose={handleClose}
              onRegister={handleRegister}
              onLoginClick={() => setActiveModal("login")}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={handleClose}
              onLogin={handleLogin}
              onRegisterClick={() => setActiveModal("register")}
            />
            <EditProfileModal
              isOpen={activeModal === "edit-profile"}
              onClose={handleClose}
              onUpdateUser={handleUpdateUser}
            />
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              onAddItem={handleAddItemSubmit}
              onCloseModal={handleClose}
            />
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              onClose={handleClose}
              ondelete={handleRequestDelete}
            />
            <ConfirmDeleteModal
              isOpen={showDeleteConfirm}
              onClose={handleCancelDelete}
              onConfirm={handleConfirmDelete}
            />
            <Footer />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </Router>
    </CurrentUserContext.Provider>
  );
}

export default App;
