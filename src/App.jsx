import { useState } from 'react'
import './App.css'
import CartFood from './components/cart/CartFood'
import Foods from './components/foods/Foods'
import Banner from './components/header/Banner'
import Header from './components/header/Header'
import Recipes from './components/foods/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrentlyCooking from './components/cart/Currently-cookig'

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
      // alert('This food already esists')
      toast('This food already esists')
    }
  }

  const [currentCookingFoods, setCurrentCookingFoods] = useState([])

  function handlePreparing(item) {
    const updateFoodTable = wantToCook.filter(food => food.id !== item.id)
    setWantToCook(updateFoodTable)

    const updateCurrentCookingFoods = [...currentCookingFoods, item]
    setCurrentCookingFoods(updateCurrentCookingFoods)
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <ToastContainer theme="dark" />

      <div className='max-w flex flex-col-reverse lg:flex-row gap-4'>
        <Foods handleWantToCook={handleWantToCook}></Foods>

        <div className='lg:w-1/3 border p-6 border-slate-500 rounded-xl h-max'>
          <CartFood wantToCook={wantToCook} handlePreparing={handlePreparing}></CartFood>
          <CurrentlyCooking currentCookingFoods={currentCookingFoods}></CurrentlyCooking>
        </div>
      </div>

    </>
  )
}

export default App
