import { Link } from "react-router-dom";

const TopNav = () => {
    return(
        <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-black px-20 py-5 bg-[#FFF8F1]">
            <Link to="/" className="text-lg font-bold">Cafe</Link>
            <nav className="flex gap-5">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/menu" className="hover:text-gray-300">Menu</Link>
                <Link to="/location" className="hover:text-gray-300">Location</Link>
            </nav>
        </div>
    )
}

export default TopNav;