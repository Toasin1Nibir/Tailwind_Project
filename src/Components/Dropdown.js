import React from 'react'
import {Link} from 'react-router-dom'
function Dropdown({isOpen,toggle}) {
    return (
        <div className =
        { isOpen ?
            'grid grid-rows-4 text-white text-center item-center bg-yellow-500' : 'hidden'
        }
        onClick={toggle} div>
            <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/'>About</Link>
                <Link className='p-4' to='/'>Login</Link>
                <Link className='p-4' to='/'>Contact</Link>
        </div>
    )
}

export default Dropdown
