import './App.css'
import Foods from './components/foods/Foods'
import Banner from './components/header/Banner'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>

      <div className='max-w'>
        <Foods></Foods>
      </div>

    </>
  )
}

export default App
