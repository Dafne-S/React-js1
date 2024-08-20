import { useState ,useEffect } from "react"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {

const [products,setProducts] = useState([])

useEffect(() => {
    const fetchData = async() => {
        try{
            const response = await fetch('/productos.json')
            const data = await response.json()
            setProducts(data)
        }catch(error){
            console.log(error)
        }
    }
    fetchData()
},[])

console.log(products)

    return(
        <div className="container">
        <h1>{greeting}</h1>
        
        <ItemList product={products}></ItemList>

        </div>
    )
}

export default ItemListContainer;