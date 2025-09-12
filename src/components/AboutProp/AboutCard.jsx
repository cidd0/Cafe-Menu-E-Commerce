const AboutCard = ({ image, title, description }) => {
    return(
        <div className="flex items-center gap-12 max-w-6xl mx-auto">
            <img 
                src={image} 
                alt={title} 
                className="w-96 h-72 object-cover rounded-lg shadow-lg flex-shrink-0" 
            />
            <div className="flex-1">
                <h1 className="text-[3rem] font-bold mb-6">
                    {title}
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AboutCard;