import { useState ,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

const [products,setProducts] = useState([])
const {categoryId} = useParams();

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

console.log(categoryId)

console.log(products)

    return(
        <div className="container">
        <h1>{greeting}</h1>
        
        <ItemList products={products}></ItemList>

        </div>
    )
}


export default ItemListContainer;