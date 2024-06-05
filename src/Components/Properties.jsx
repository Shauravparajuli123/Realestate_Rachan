import React from 'react';
import house1 from '../Assets/house1.jpg';
import house2 from '../Assets/house2.jpg';
import house3 from '../Assets/house3.jpg';
import house4 from '../Assets/house4.jpg';
import house5 from '../Assets/house5.jpg';
import house6 from '../Assets/house6.jpg';
const houseData = [
  { img: house1, title: 'London', description: 'Price starts from $400k' },
  { img: house2, title: 'Kitchener', description: 'Price starts from $450k' },
  { img: house3, title: 'Waterloo', description: 'Price starts from $350k' },
  { img: house4, title: 'Windsor', description: 'Price starts from $300k' },
  { img: house5, title: 'Toronto', description: 'Price starts from $750k' },
  { img: house6, title: 'Ottawa', description: 'Price starts from $470k' },
];
const Properties = () => {
  return (
    <div>
      <div className='text-center mt-3 mb-0'>
        <h2 className='text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-10' id='properties'>Location and Properties</h2>

      </div>
      <div id="cards" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10">
        {houseData.map((house, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={house.img} alt={house.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2">{house.title}</h2>
              <p className="text-gray-700">{house.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Properties