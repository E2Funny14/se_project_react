import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({ clothingItems, onAddItemClick, onCardClick, weatherData }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onAddItemClick={onAddItemClick}
        onCardClick={onCardClick}
        weatherData={weatherData}
      />
    </div>
  );
}

export default Profile;
