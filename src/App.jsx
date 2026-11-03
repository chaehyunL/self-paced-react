import "./App.css";
import Header from "./components/header/Header";
import FilterableRestaurantList from "./components/main/FilterableRestaurantList";
import Aside from "./components/aside/Aside";
import { useState } from "react";
import { RESTAURANTS } from "./data/restaurants";

function App() {
  const [category, setCategory] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = RESTAURANTS.filter(
    (restaurant) =>
      category === "전체" || restaurant.category === category
  );

  function handleOpenModal(restaurant) {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <FilterableRestaurantList
        category={category}
        onChangeCategory={setCategory}
        restaurants={filteredRestaurants}
        onOpenModal={handleOpenModal}
      />
      <Aside
        isModalOpen={isModalOpen}
        selectedRestaurant={selectedRestaurant}
        onCloseModal={handleCloseModal}
      />
    </>
  );
}

export default App;
