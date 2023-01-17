import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {



  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const plantListElements = filteredPlants.map((plant) => {
    return <PlantCard key={plant.id} price={plant.price} image={plant.image} name={plant.name}/>
  })


  return (
    <ul className="cards">{plantListElements}</ul>
  );
}

export default PlantList;
