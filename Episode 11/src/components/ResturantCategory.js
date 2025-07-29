import ItemsList from "./ItemsList"

const ResturantCategory = ({data}) => {
        
    const handleClick = () => {
        console.log("Clicked")
    }

    return (

        <div className="w-[720px] mx-auto my-6 bg-blue-50 shadow-lg m-4 p-4">
            <div className="flex justify-between hover hover:cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
    
                <ItemsList items={data.itemCards}/>


        </div>
    )
}

export default ResturantCategory