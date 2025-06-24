import "./ClothesSection.css";
import { useContext } from "react";
import ItemCard from "../../ItemCard/ItemCard";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  onAddItemClick,
  onCardClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <h1 className="clothes-section__title">Your Items</h1>
        <button
          className="clothes-section__add-button"
          onClick={onAddItemClick}
        >
          + Add Item
        </button>
      </div>
      <ul className="clothes-section__list">
        {userClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
