import { useState } from 'react'
import './App.css'
import { Row, Divider, Button } from 'antd';
import foods from "../../src/foods.json";
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';

function App() {
  const [food, setFood]=useState(foods)

  const handleAddFood = (newFood) =>{
    const copy = [...food]
    copy.push(newFood)
    setFood(copy)

  }

  return (
    <div className="App">
    <h1>Food List</h1>
    <Divider/>
    <AddFoodForm handleAddFood={handleAddFood}/>
    <div className='list-wrapper'>
        {food.map(item=>{
            return (
              <div key={item.name}>
                <FoodBox food={ {
                    name: item.name,
                    calories: item.calories,
                    image: item.image,
                    servings: item.servings
                }} />
              </div>
            )
        })}
        </div>

      {/* Display Search component here */}

      {/* <Divider>Food List</Divider> */}

      {/* <Row style={{ width: '100%', justifyContent: 'center' }}> */}
        {/* Render the list of Food Box components here */}
      {/* </Row> */}
    </div>
  );
}

export default App;