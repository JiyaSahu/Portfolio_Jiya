import React from 'react'
import './tooltip.css';
import { Link } from 'react-router-dom'; // Import Link for navigation


const Footer = () => {
    return (
        <div>
            <footer>

                <div class="flex justify-center items-center mt-10 tooltipTop">

                    {/* Use Link instead of a for React Router navigation */}
                    <Link to='/'>
                        {/* <span>To Top</span> */}
                    </Link>
                    <img src="public/j_logo.png" alt="" width="100px" height="100px"/>

                </div>

                <p class="text-center mt-0">Jiya Kumari &copy; 2024</p>
            </footer>
        </div>
    )
}

export default Footer