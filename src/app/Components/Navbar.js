import React from 'react'
import "../globals.css";

const Navbar = () => {
  return (
    <>
      <div className='navbar-outer d-flex py-3  justify-content-between'>

      {/* <div className='navbar-inner d-flex gap-5'> */}

         <div className='logo'>
          <img src='/assets/logo.png' className='img-fluid'></img>
         </div>

         
            <ul className='d-flex list-unstyled gap-5 nav-links align-items-center mb-0'>
                <li className=''>Home</li>
                <li className=''>Shop</li>
                <li className=''>Bulk Order</li>
                <li className=''>Blog</li>
                <li className=''>About</li>
            </ul>
         {/* </div> */}

         <div className='nav-icons d-flex gap-3 align-items-center'>
              <img src='https://cdn-icons-png.flaticon.com/128/6051/6051092.png'></img>
              
              <img src='https://cdn-icons-png.flaticon.com/128/15494/15494722.png'></img>

              <img src='https://cdn-icons-png.flaticon.com/128/18695/18695999.png'></img>
         </div>
      </div>
    </>
  )
}

export default Navbar
