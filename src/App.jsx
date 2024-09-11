
import "./App.css"
import Navbar  from "./components/Navbar.js/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from "./components/Error/Error"

const App = () => {

  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/category/:categoryId' element={<Navbar/>}></Route>
    <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
    <Route path='*' element={<Error/>}></Route>

    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
  )
}

export default App
