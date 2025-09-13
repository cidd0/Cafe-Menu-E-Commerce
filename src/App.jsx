import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/layout/TopNav.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Menu from "./Routes/Menu.jsx";
import Location from "./Routes/Location.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#FFF8F1] flex flex-col">
                <TopNav />
                <main className="flex-1 pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/location" element={<Location />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
