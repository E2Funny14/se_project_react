import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onAddItemClick }) {
  return (
    <div className="clothes-section">
      <button className="clothes-section__add-button" onClick={onAddItemClick}>
        + Add Item
      </button>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;