import React, { useState } from "react";

function NewPlantForm({ onSubmit }) {

  const [newPlantForm, setNewPlantForm] = useState({
    name: '',
    image: '',
    price: 0
  })

function handleChange(e){
  
  const name = e.target.name
  const value = e.target.value

  setNewPlantForm({
    ...newPlantForm,
    [name]: value,
  })

  console.log(newPlantForm)
}

function handleSubmit(e){
  e.preventDefault()
  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPlantForm)
  })
  .then(r => r.json())
  .then((plant) => onSubmit(plant))
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={newPlantForm.name} placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" value={newPlantForm.image} placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" value={newPlantForm.price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
