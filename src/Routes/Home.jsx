import HomeImg from "../assets/Home-Cafe.jfif";

const Home = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex px-24 py-10 gap-24 items-center">
                <div className="flex-shrink-0">
                    <img
                        src={HomeImg}
                        alt="Cafe"
                        className="w-[340px] h-[480px] object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-md"
                    />
                </div>
                
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-5xl mb-2 leading-tight" style={{fontFamily: 'Italiana, serif'}}>
                        A Cozy<br />
                        <span>Café Experience</span>
                    </h1>
                    <p className="mt-5 text-lg leading-relaxed text-gray-800 max-w-lg">
                        Step into comfort as you sip your favorite brew and savor delightful treats. We welcome every guest with warmth, care, and the perfect cup of coffee. 
                    </p>
                    <p className="mt-5 text-lg leading-relaxed text-gray-800 max-w-lg">
                        Relax, unwind, and enjoy the simple joys of life—one sip at a time.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="border border-black px-6 py-2 font-medium hover:bg-black hover:text-white transition">
                            About Us
                        </button>
                        <button className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition">
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;