import { useState } from 'react'
import './App.css'
import { Row, Divider, Button } from 'antd';
import foods from "../../src/foods.json";
import FoodBox from './components/FoodBox/FoodBox';



function App() {
  const [food, setFood]=([foods])

  return (
    <div className="App">
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
       
      {/* Display Add Food component here */}

      {/* <Button> Hide Form / Add New Food </Button> */}

      {/* Display Search component here */}

      {/* <Divider>Food List</Divider> */}

      {/* <Row style={{ width: '100%', justifyContent: 'center' }}> */}
        {/* Render the list of Food Box components here */}
      {/* </Row> */}
    </div>
  );
}

export default App;