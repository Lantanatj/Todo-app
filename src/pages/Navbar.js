import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
       <span>Lanny's Todo </span> 
        <ul>
            <Link to="/" className='navLink'>
                <li>⏰</li>
            </Link>

            <Link to="/create" className='navLink'>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#db4c3f" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Create task
                </li>
            </Link>
            
            <Link to="/tasks" className='navLink'>
                <li>Tasks</li>
            </Link>

        </ul>

    </div>
  )
}

export default Navbar