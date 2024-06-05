import React from 'react';
import rachan from '../Assets/rachan.jpg';

const Herosection = () => {
  return (
    <div id='home'>
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${rachan})` }}>
        <div className="flex flex-col justify-center items-start h-full bg-black bg-opacity-50">
          <div className="text-white text-left px-5">
            <h1 className="font-bold sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Rachan Poudel
            </h1>
            <p className="font-semibold mt-4 sm:text-2xl md:text-3xl">
              We are glad to have you around. <br />Feel free to browse our website.
            </p>
            <button className="mt-8">
              <a href="#cards" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Learn More >></span>
              </a>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Herosection;
