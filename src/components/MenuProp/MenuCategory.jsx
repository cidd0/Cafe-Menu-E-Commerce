import MenuCard from "./MenuCard.jsx";

const MenuCategory = ({ title, items = [] }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800" style={{fontFamily: 'Italiana, serif'}}>
                {title}
            </h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <MenuCard 
                        key={index}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;