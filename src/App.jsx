
import "./App.css"
import Navbar  from "./components/Navbar.js/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App() => {

  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/category' element={<ItemListContainer/>}></Route>
    <Route path='/item' element={<ItemListContainer/>}></Route>
    <Route path='*' element={<ItemListContainer/>}></Route>

    </Routes>
    // <Navbar></Navbar>
    // <ItemListContainer greeting="Bienvenidos"/>
    // <Footer></Footer>
    // <ItemDetailContainer></ItemDetailContainer>

    </BrowserRouter>
    
    </>
  )
}

export default App
