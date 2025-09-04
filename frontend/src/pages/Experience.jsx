import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white pt-20 overflow-hidden"
       style={{
        backgroundImage: `url(${assets.experinceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 z-10" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float z-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-float z-20" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float z-20" style={{animationDelay: '6s'}}></div>

      {/* Experience Content */}
      <div className={`relative z-30 px-6 text-center max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            The HomeStay Experience
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light">
            Welcome to <span className="text-blue-300 font-semibold">HomeStay</span> – where modern elegance meets timeless luxury.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Our curated destinations offer more than just a room – they offer a <span className="text-purple-300 font-medium">lifestyle</span>.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Whether you're escaping to serenity or exploring a vibrant cityscape, your experience with us is designed to feel 
            <span className="text-blue-300 font-medium"> effortless</span>, 
            <span className="text-purple-300 font-medium"> indulgent</span>, and 
            <span className="text-pink-300 font-medium"> unforgettable</span>.
          </p>
        </div>

        {/* Call to Action */}
        <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <span className="relative z-10">Discover Your Perfect Stay</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
