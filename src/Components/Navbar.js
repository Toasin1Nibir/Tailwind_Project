import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({toggle}) => {
    return (
        <nav className='container  flex justify-between item-center h-16 text-white relative shadow-sm ' role='navigation'>
            <h1 className='pl-10'>Food Planet</h1>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
              
                <svg className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
          
            </div>
            <div className='pr-8 md:block hidden'>
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/'>About</Link>
                <Link className='p-4' to='/'>Login</Link>
                <Link className='p-4' to='/'>Contact</Link>

            </div>

        </nav>
      
        
    )
}

export default Navbar
