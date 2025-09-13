const SideMenu = ({ categories, selectedCategory, onCategoryClick }) => {
    return (
        <div className="p-6 h-full">
            <h3 className="text-xl font-bold mb-6" style={{fontFamily: 'Italiana, serif'}}>
                Menu Categories
            </h3>
            <ul className="space-y-3">
                {categories.map((category) => (
                    <li key={category.id}>
                        <button
                            onClick={() => onCategoryClick(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                selectedCategory === category.id
                                    ? 'bg-black text-white font-semibold'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;