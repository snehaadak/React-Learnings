import { useSelector } from "react-redux"
import ItemsList from "./ItemsList"
import { clearCart } from "../../Utilities/cartSlice"
import { useDispatch } from "react-redux"

const Cart = () => {
    
    const cartitems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch(clearCart)
    
    return (
        <div>
            <h1 className="text-center m-5 p-5 text-2xl font-bold">Cart Items</h1>
            <div className="w-6/12 m-auto pb-7">
                <button className="rounded-2xl bg-blue-100 px-3 py-2 font-bold hover:cursor-pointer" 
                    onClick={()=>{
                                dispatch(clearCart())
                                }}>Clear Cart</button>
                {cartitems.length === 0 && 
                <h1 className="text-center m-5 p-5"> Your Cart is Empty! Add Items to it.......</h1>}
                <ItemsList items={cartitems}/>
            </div>
        </div>
    )
}

export default Cart