import { useSelector } from "react-redux"
import ItemsList from "./ItemsList"

const Cart = () => {
    
    const cartitems = useSelector((store)=>store.cart.items)
    
    return (
        <div>
            <h1 className="text-center m-5 p-5 text-2xl font-bold">Cart Items</h1>
            <div className="w-6/12 m-auto">
                <ItemsList items={cartitems}/>
            </div>
        </div>
    )
}

export default Cart