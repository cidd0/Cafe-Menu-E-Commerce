import Origin from "../assets/OurOrigin.png";
import People from "../assets/OurPeople.png";
import Vision from "../assets/OurVision.png";
import AboutProp from "../components/AboutProp/AboutCard.jsx";
import { useState, useEffect } from "react";

const props = [
    {
        image: Origin,
        title: "Our Origin",
        description: "Born from a passion for exceptional coffee and genuine hospitality, our cafe began as a dream to create a warm gathering place where community and quality converge. What started as a small roastery in 2018 has blossomed into a beloved neighborhood haven, where every cup tells a story of carefully sourced beans and artisanal craftsmanship."
    },
    {
        image: People,
        title: "Our People",
        description: "At the heart of our cafe are the passionate individuals who bring warmth to every interaction. Our skilled baristas are more than coffee makers—they're craftspeople dedicated to perfecting every brew and creating genuine connections with our guests. From our friendly front-of-house team to our experienced roasters, each person contributes their unique talents to make every visit memorable and welcoming."
    },
    {
        image: Vision,
        title: "Our Vision",
        description: "We envision a world where great coffee brings people together, fostering meaningful connections in an increasingly digital age. Our goal is to be more than just a cafe—we strive to be a cornerstone of our community, supporting local initiatives, sourcing ethically, and creating a space where ideas flourish, friendships bloom, and everyone feels at home. Every cup we serve moves us closer to this vision of unity and sustainability."
    }

]

const About = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === props.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return(
        <div className="h-full relative overflow-hidden pt-30">
            <div className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    
                {props.map((prop, index) => (
                    <div 
                        key={prop.title} 
                         className="h-full w-full flex-shrink-0 flex items-center justify-center bg-[#f9f4ef] px-8"
                    >
                        <AboutProp {...prop} />
                    </div>
                ))}
            </div>
                <button 
                onClick={() => goToSlide(currentIndex === 0 ? props.length - 1 : currentIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-10 flex items-center justify-center w-12 h-12"
                >
                    ←
                </button>

                <button 
                onClick={() => goToSlide(currentIndex === props.length - 1 ? 0 : currentIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-10 flex items-center justify-center w-12 h-12"
                >
                    →
                </button>
        </div>
    )
}
export default About