import React from 'react'
import ImageOne from '../Images/1.jpg';
import ImageTwo from '../Images/2.jpg';
import ImageTw from '../Images/3.jpg';
const Dishes = () => {
    return (
    <>
    <p className='text-4xl text-center text-purple-700 font-serif ...'>Our menu</p>
      <div className='rounded-full flex flex-col justify-center items-center py-40 bg-white'>
        <img src={ImageOne} alt='' className='rounded-full h-3/12 w-3/12 rounded mb-10 shadow' />
        <div className='center-content italic ...'>
          <h2 className='text-2xl mb-2'>Egg Muffins</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$16</span><br/>
          <button class="py-6 px-10 rounded-full bg-green-500 ...">Buy Now</button>
        </div>
      </div>
      <div className='rounded-full flex flex-col justify-center items-center py-40 bg-white'>
        <img src={ImageTwo} alt='' className='rounded-full h-3/12 w-3/12 rounded mb-10 shadow' />
        <div className='center-content italic ...'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$18</span><br/>
          <button class="py-6 px-10 rounded-full bg-green-500 ...">Buy Now</button>
        </div>
      </div>
      <div className='rounded-full flex flex-col justify-center items-center py-40 bg-white'>
        <img src={ImageTw} alt='' className='rounded-full h-3/12 w-3/12 rounded mb-10 shadow' />
        <div className='center-content italic ...'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$18</span><br/>
          <button class="py-6 px-10 rounded-full bg-green-500 ...">Buy Now</button>
        </div>
      </div>
    </>
    )
}

export default Dishes
