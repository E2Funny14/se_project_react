import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({ clothingItems, onAddItemClick, onCardClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection clothingItems={clothingItems} onAddItemClick={onAddItemClick} onCardClick={onCardClick} />
    </div>
  );
}

export default Profile;