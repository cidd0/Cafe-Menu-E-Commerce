import { useState } from "react";
import SideMenu from "../components/MenuProp/SideMenuCategory.jsx";
import MenuCategory from "../components/MenuProp/MenuCategory.jsx";

const Menu = () => {
   
    const [selectedCategory, setSelectedCategory] = useState('hot-coffee');

    const menuCategories = [
        {
            id: 'hot-coffee',
            name: 'Hot Coffee',
            items: [
                { name: 'Espresso', price: 120, description: 'Rich and bold coffee shot' },
                { name: 'Americano', price: 140, description: 'Espresso with hot water' },
                { name: 'Cappuccino', price: 160, description: 'Espresso with steamed milk and foam' },
                { name: 'Latte', price: 170, description: 'Espresso with steamed milk' },
                { name: 'Mocha', price: 180, description: 'Espresso with chocolate and steamed milk' }
            ]
        },
        {
            id: 'cold-coffee',
            name: 'Cold Coffee',
            items: [
                { name: 'Iced Americano', price: 150, description: 'Chilled americano over ice' },
                { name: 'Cold Brew', price: 160, description: 'Slow-brewed cold coffee' },
                { name: 'Frappuccino', price: 190, description: 'Blended coffee with ice and cream' },
                { name: 'Iced Latte', price: 180, description: 'Espresso with cold milk over ice' }
            ]
        },
        {
            id: 'pastries',
            name: 'Pastries',
            items: [
                { name: 'Croissant', price: 80, description: 'Buttery, flaky pastry' },
                { name: 'Blueberry Muffin', price: 90, description: 'Fresh baked muffin with blueberries' },
                { name: 'Danish', price: 100, description: 'Sweet pastry with filling' },
                { name: 'Scone', price: 85, description: 'Traditional British pastry' }
            ]
        },
        {
            id: 'sandwiches',
            name: 'Sandwiches',
            items: [
                { name: 'Club Sandwich', price: 220, description: 'Triple-layer sandwich with chicken' },
                { name: 'Grilled Cheese', price: 180, description: 'Melted cheese on toasted bread' },
                { name: 'BLT', price: 200, description: 'Bacon, lettuce, and tomato sandwich' },
                { name: 'Panini', price: 190, description: 'Grilled Italian sandwich' }
            ]
        }
    ];

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const currentCategory = menuCategories.find(cat => cat.id === selectedCategory);

    return (
        <div className="flex min-h-screen">
            <aside className="fixed left-0 top-20 w-1/4 h-[calc(100vh-5rem)] bg-[#FFF8F1]">
                <SideMenu 
                    categories={menuCategories}
                    selectedCategory={selectedCategory}
                    onCategoryClick={handleCategoryClick}
                />
            </aside>
            
            <main className="ml-[25%] w-3/4 p-8">
                {currentCategory && (
                    <MenuCategory 
                        title={currentCategory.name}
                        items={currentCategory.items}
                    />
                )}
            </main>
        </div>
    );
};

export default Menu;