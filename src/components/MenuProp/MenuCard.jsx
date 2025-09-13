 
 const MenuCard = ({ name, price, description }) => (
    <div className="flex justify-between items-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
        <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex items-center gap-4 ml-6">
            <span className="text-2xl font-bold text-gray-800">₱{price}</span>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    Add to Cart
            </button>
        </div>
    </div>
 )

 export default MenuCard;