import React from 'react'
import Image from '../Images/4.png';
const Content = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
             <img src={Image} alt='' className=' h-3/12 w-3/12 rounded mb-10 shadow' />
             <div>
            <p className='text-2xl font-serif ...'>Fast, Tasty and Served well </p>
            <p className="font-serif pl-8 ...">100% healthy and natural food</p>
             </div>
          
           
            
        </div>
    )
}

export default Content
