function RestaurantCard({ restaurant, onOpenModal, categoryImages }) {
    return (
        <li className="restaurant"
            key={restaurant.id}
            onClick={() => onOpenModal(restaurant)}
        >
            <div className="restaurant__category">
                <img
                    src={`/templates/category-${categoryImages[restaurant.category]}.png`}
                    alt={restaurant.category}
                    className="category-icon"
                />
            </div>
            <div className="restaurant__info">
                <h3 className="restaurant__name text-subtitle">
                    {restaurant.name}
                </h3>
                <p className="restaurant__description text-body">
                    {restaurant.description}
                </p>
            </div>
        </li>);
}

export default RestaurantCard;
