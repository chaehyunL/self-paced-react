function RestaurantDetailModal({ restaurant, onCloseModal }) {
  return (
    <modal title={restaurant.name} onClose={onCloseModal}>

      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">{restaurant.description}</p>
      </div>
      <div className="button-container">
        <button className="button button--primary text-caption"
          onClick={onCloseModal}
        >닫기</button>
      </div>
    </modal>

  );
}

export default RestaurantDetailModal;
