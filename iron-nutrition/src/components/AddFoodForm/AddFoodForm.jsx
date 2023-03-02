import React from "react";
import { useState } from 'react'
import { Divider, Input, Button } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [cal,setCal]=useState("")
    const [serve,setServe]=useState("")
    const [form,setForm]=useState(true)
    
    const {handleAddFood} = props

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleImageChange = (event) =>{
        setImage(event.target.value)
    }
    const handleCalChange = (event) =>{
        setCal(event.target.value)
    }
    const handleServeChange = (event) =>{
        setServe(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        const foodToCreate = {
            name,
            image,
            cal,
            serve
        }
        handleAddFood(foodToCreate)
    }
const handleShowForm=()=>{
    setForm(!form)
}

  return (
    <div>
    {form &&
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={cal} type="number" onChange={handleCalChange} />

      <label>Servings</label>
      <Input value={serve} type="number" onChange={handleServeChange} />

      <button type="submit">Create</button>
    </form>
    }
    <Button onClick={handleShowForm}>{form ? "Hide form" : "Show form" }</Button>
    </div>
  );
}

export default AddFoodForm;



