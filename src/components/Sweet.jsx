import React from 'react'
import Sweet_video from '../sweet.mp4'

const Sweet = () => {
  return (
    <div>
        {/* Content Section */}
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 w-full">


            {/* Right Section: Project Details */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFDE5D]">
              Sweet Cravgins
            </h2>
            <h3 className="text-lg sm:text-xl italic mt-2">(E-Commerce Website)</h3>
            <p className="mt-4 text-sm sm:text-base lg:text-lg">
              Developed an e-commerce website named "Sweet Cravings" aimed at
              providing a seamless online shopping experience for dessert
              lovers. The website features a variety of sweet treats, easy
              navigation, and secure payment options.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-2">
              {[
                "#html",
                "#css",
                "#javascript",
                "#php",
                "#bootstrap",
                "#mysql",
                "#figma",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#333] rounded-full text-sm text-[#00FFFF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

         {/* Divider */}
         <div className="hidden lg:block w-1 h-[300px] lg:h-[500px] bg-[#00FFFF]"></div>
          
          
          {/* Left Section: Laptop with Image and Video */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Laptop Image */}
            {/* <img
              src="public/screen.png"
              alt="Laptop"
              className="w-[90%] lg:w-[700px] h-auto object-cover"
            /> */}
            {/* Video */}
            <video
              src={Sweet_video}
              autoPlay
              loop
              muted
              controls
              className="top-[18.5%] left-[19.5%] w-[100%] h-[61%] rounded-lg"
            ></video>
          </div>

          
          
        </div>
    </div>
  )
}

export default Sweet