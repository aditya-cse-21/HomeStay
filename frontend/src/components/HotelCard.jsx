import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'


const HotelCard = ({room, index}) => {
  return (
    <Link to={'/rooms/'+room._id} onClick={()=> scrollTo(0,0)} key={room._id} 
    className='group relative max-w-70 w-full h-[420px] rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 flex flex-col'>
        {/* Display room image */}
        <div className="relative overflow-hidden h-40 flex-shrink-0">
          <img 
            src={room.images[0]} 
            alt="hotel room"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Simple badge */}
          {index % 2 === 0 && 
          <div className='absolute top-3 left-3'>
            <span className='px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm border border-gray-200'>
              Best Seller
            </span>
          </div>}
          
          {/* Price badge */}
          <div className='absolute top-3 right-3'>
            <span className='px-3 py-1 text-sm bg-white text-gray-800 font-semibold rounded-lg shadow-sm border border-gray-200'>
              ${room.pricePerNight}
            </span>
          </div>
        </div>

                  <div className='p-5 flex flex-col flex-grow min-h-0'>
              {/* Hotel name and rating */}
              <div className='flex items-start justify-between mb-3 flex-shrink-0'>
                  <div className="flex-1 min-w-0">
                    <h3 className='font-playfair text-xl font-semibold text-gray-900 mb-1 line-clamp-2'>
                      {room.hotel.name}
                    </h3>
                    <p className="text-sm text-gray-500">{room.roomType}</p>
                  </div>
                  <div className='flex items-center gap-1 flex-shrink-0 ml-2'>
                      <img src={assets.starIconFilled} alt="starIcon" className="w-4 h-4" />
                      <span className="text-sm font-medium text-gray-700">4.5</span>
                  </div>
              </div>

              {/* Location */}
              <div className='flex items-center gap-2 text-sm text-gray-600 mb-3 flex-shrink-0'>
                  <img src={assets.locationIcon} alt="locationIcon" className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{room.hotel.address}</span>
              </div>

              {/* Amenities preview */}
              <div className="flex items-center gap-2 mb-3 flex-wrap flex-grow min-h-0">
                {room.amenities.slice(0, 2).map((amenity, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md flex-shrink-0">
                    {amenity}
                  </span>
                ))}
                {room.amenities.length > 2 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md flex-shrink-0">
                    +{room.amenities.length - 2} more
                  </span>
                )}
              </div>

              {/* Price and Book button */}
              <div className='flex items-center justify-between mt-auto flex-shrink-0'>
                  <div>
                    <p className='text-sm text-gray-500'>Starting from</p>
                    <p className='text-xl font-bold text-gray-900'>${room.pricePerNight}<span className='text-sm font-normal text-gray-500'>/night</span></p>
                  </div>
                  <button className='px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 flex-shrink-0'>
                    Book Now
                  </button>
              </div>
          </div>
    </Link>
  )
}

export default HotelCard