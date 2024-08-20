
import "./App.css"
import Navbar  from "./components/Navbar.js/Navbar"
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer"
import CartWidget from "./components/Cart/CartWidget"

function App() {


  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting="Bienvenidos"/>
      <CartWidget></CartWidget>
    </>
  )
}

export default App
