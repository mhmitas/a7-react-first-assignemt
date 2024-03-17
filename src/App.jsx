import { useState } from 'react'
import './App.css'
import CartFood from './components/cart/CartFood'
import Foods from './components/foods/Foods'
import Banner from './components/header/Banner'
import Header from './components/header/Header'
import Recipes from './components/foods/Recipes'

function App() {

  const [wantToCook, setWantToCook] = useState([])

  function handleWantToCook(food) {
    // console.log(food);
    const isExist = wantToCook.find(element => element.id == food.id)
    const updateWantToCook = [...wantToCook, food]
    // console.log(isExist)
    if (!isExist) {
      setWantToCook(updateWantToCook)
    } else {
      alert('This food already esists')
    }
  }

  function handlePreparing(item) {
    const updateFoodTable = wantToCook.filter(food => food.id !== item.id)
    setWantToCook(updateFoodTable)
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>

      <div className='max-w flex flex-col-reverse lg:flex-row gap-4'>
        <Foods handleWantToCook={handleWantToCook}></Foods>
        <CartFood wantToCook={wantToCook} handlePreparing={handlePreparing}></CartFood>
      </div>

    </>
  )
}

export default App
