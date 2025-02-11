import React from 'react'
import './tooltip.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import j_logo from '../j_logo.png'


const Footer = () => {
    return (
        <div>
            <footer>

                <div class="flex justify-center items-center mt-10 tooltipTop">

                    {/* Use Link instead of a for React Router navigation */}
                    <Link to='/'>
                        {/* <span>To Top</span> */}
                    </Link>
                    <img src={j_logo} alt="" width="100px" height="100px"/>

                </div>

                <p class="text-center mt-0">Jiya Kumari &copy; 2024</p>
            </footer>
        </div>
    )
}

export default Footer