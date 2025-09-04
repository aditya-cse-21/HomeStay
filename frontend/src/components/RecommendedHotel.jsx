import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const RecommendedHotel = () => {
    const { rooms, searchedCities } = useAppContext();
    const [recommended, setRecommended] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const filterHotels = () => {
        const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hotel.city));
        setRecommended(filteredHotels);
    };

    useEffect(() => {
        filterHotels();
        
        // Trigger animation when component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [rooms, searchedCities]);

    //here the return will be true only if there is a room or more than 0
    return recommended.length > 0 && (
        <div className="relative flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            
            <div className={`relative z-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            ✨ Personalized for You
                        </span>
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                            Recommended Hotels
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Curated with care exclusively for your travel preferences — experience handpicked stays that blend 
                        <span className="text-blue-600 font-semibold"> elegance, comfort, and unforgettable hospitality</span> at every turn.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {recommended.slice(0, 4).map((room, index) => (
                        <div 
                            key={room._id} 
                            className={`transform transition-all duration-700 hover:scale-105 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                            style={{ 
                                transitionDelay: `${index * 150}ms`,
                                animationDelay: `${index * 150}ms`
                            }}
                        >
                            <HotelCard room={room} index={index} />
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16">
                    <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <span>Explore More Recommendations</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendedHotel;
