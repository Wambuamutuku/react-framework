import React from 'react'
const Header = () =>{
    return(
        <header>
       
            <nav>
                <div className="nav_container">

                <h1> <a href="#"> <span id='fit'>Fit</span><span id='ness'>ness</span> </a> </h1>

                <ul className='nav_menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contacts</a></li>
                    <button id='join'> Join Us </button>
                </ul>
                </div>
            </nav>
            <hr />
        </header>
    );
}

export default Header