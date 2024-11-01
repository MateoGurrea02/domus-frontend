import React, { useState, useEffect } from 'react';
import RateStars from './RateStars';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <Link to={`/property/detail/${data.id}`} className="relative flex flex-col lg:flex-row bg-gray-100 shadow-md rounded-lg overflow-hidden w-full mx-auto">
      <div className=" w-full lg:w-2/5">
      <img src={data.ImageProperties.length == 0 ? 'https://st2.depositphotos.com/1277251/7958/i/450/depositphotos_79588208-stock-photo-house-for-sale-board-with.jpg' : data.ImageProperties[0].path  } alt={data.adrres} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-600 font-semibold mb-1">{data.title}</h2>
          <p className="text-gray-600 font-semibold">Dirección: <span className='font-normal'>{data.address}</span></p>
          <p className="text-gray-600 font-semibold">Tipo: <span className='font-normal'>{data.PropertyType.type}</span></p>
          <p className="text-gray-600 font-semibold">Tamaño: <span className='font-normal'>{data.size}</span></p>
          <p className="text-gray-600 font-semibold">Estado: <span className='font-normal'>{data.PropertyStatus.status}</span></p>
          <p className="text-gray-600 font-semibold">Descripción: <span className='font-normal'>{data.description}</span></p>
        </div>

        <div className="flex justify-between items-center mt-4 w-full">
          <h3 className="text-xl font-bold text-violet-600">Precio: ${data.price}</h3>
          <div className="flex items-center ml-auto">
            <RateStars rate={data.rate} />
            <button
              onClick={handleLikeClick}
              className={`flex items-center justify-center rounded-full p-2 transition-all ${
                liked ? 'bg-red-500 text-white' : 'text-red-500 hover:bg-red-500/10'
              }`}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;