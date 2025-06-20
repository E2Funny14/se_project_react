import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({ clothingItems, onAddItemClick, onCardClick, weatherData, onEditProfileClick, onCardLike, onLogout }) {
  return (
    <div className="profile">
      <SideBar onEditProfileClick={onEditProfileClick} onLogout={onLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        onAddItemClick={onAddItemClick}
        onCardClick={onCardClick}
        weatherData={weatherData}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
