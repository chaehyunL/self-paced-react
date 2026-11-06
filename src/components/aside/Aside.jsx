import "../style/Aside.css";
import RestaurantDetailModal from "./RestaurantDetailModal";

function Aside({ isModalOpen, selectedRestaurant, onCloseModal }) {
  return (
    <aside>
      {isModalOpen && selectedRestaurant && (
        <RestaurantDetailModal
          restaurant={selectedRestaurant}
          onCloseModal={onCloseModal}
        />
      )}
    </aside>
  );
}

export default Aside;


