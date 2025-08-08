import { useDispatch } from "react-redux"
import { addItem } from "../../Utilities/cartSlice"



const ItemsList = ({items}) => {
    const dispatch = useDispatch(addItem)

    return (
        <div>
            
            {items.map(item => 
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400">
                    <div className="py-2 flex justify-between">
                        <span className="">{item.card.info.name} - Rs.{item.card.info.price /100} </span>
                        <button className="rounded-2xl bg-white px-2" 
                        onClick={()=>{
                            //dispatch an actions
                            dispatch(addItem(item))
                            console.log(item)
                        }}> Add +</button>
                    </div>
                    <p className="text-xs text-gray-600 w-[500px]">{item.card.info.description}</p>
                </div>
            )}
        </div>
    )
}


export default ItemsList