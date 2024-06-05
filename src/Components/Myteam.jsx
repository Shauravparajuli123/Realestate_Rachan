import React from 'react';
import rachan2 from '../Assets/rachan2.jpeg';
import roshanipic from '../Assets/roshanipic.jpg';

const Myteam = () => {
  return (
    <div className="py-12 bg-gray-100" id='myteam'>
      <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-10">
        My Team
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
          <img src={rachan2} alt="Rachan" className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Rachan Poudel</h2>
            <p className="text-gray-700">I'm a licensed realtor for the last 5 years and a top-performing agent. I am dedicated to help clients buy and sell properties at a resonable cost.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
          <img src={roshanipic} alt="Roshani" className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Roshani Poudel</h2>
            <p className="text-gray-700">As a dedicated real estate professional, I’m passionate about helping clients find their dream homes. Let’s make your real estate journey a success!.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myteam;
