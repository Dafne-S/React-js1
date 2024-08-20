
import "./App.css"
import Navbar  from "./components/Navbar.js/Navbar"
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting="Bienvenidos"/>
    <Footer></Footer>
    </>
  )
}

export default App
