
import "./App.css"
import Navbar  from "./components/Navbar.js/Navbar"
import ItemListContainer from "./components/ItemListContainer.js/ItemListContainer"
import CartWidget from "./components/Cart/CartWidget"

function App() {

  const divStyle = {
    color: 'violet',
    backgroundColor: 'lightgray',
    padding: '10px',
    border: '1px solid black',
  }

  return (
    <>
      <h1 style={divStyle}> React </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium similique eligendi voluptas sunt harum vitae, tenetur adipisci nihil alias sint, mollitia repellat nostrum suscipit molestias quaerat perferendis non porro?</p>
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
      <CartWidget></CartWidget>
    </>
  )
}

export default App
