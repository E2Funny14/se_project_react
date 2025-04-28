import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({
  clothingItems,
  onAddItemClick,
  onCardClick,
  weatherData,
}) {
  const filteredClothingItems = clothingItems.filter((item) => {
    return item.weather === weatherData.type;
  });

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
        {filteredClothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
