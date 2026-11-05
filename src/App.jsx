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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState(RESTAURANTS);
  
  const filteredRestaurants = restaurants.filter(
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

  function handleOpenAddModal() {
    setIsAddModalOpen(true);
  }

  function handleCloseAddModal() {
    setIsAddModalOpen(false);
  }

  function handleAddRestaurant(newRestaurant) {
    setRestaurants((prev) => [newRestaurant, ...prev]);
  }

  return (
    <>
      <Header
        onOpenAddModal={handleOpenAddModal}
      />
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

        isAddModalOpen={isAddModalOpen}
        onCloseAddModal={handleCloseAddModal}
        onAddRestaurant={handleAddRestaurant}
      />
    </>
  );
}

export default App;
