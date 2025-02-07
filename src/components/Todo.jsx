import React from 'react'

const Todo = () => {
  return (
    <div>
            {/* Content Section */}
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 w-full">
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
                        src="public/todo.mp4"
                        autoPlay
                        loop
                        muted
                        controls
                        className="top-[18.5%] left-[19.5%] w-[100%] h-[61%] rounded-lg"
                    ></video>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-1 h-[300px] lg:h-[500px] bg-[#00FFFF]"></div>

                {/* Right Section: Project Details */}
                <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#f8a8c4]">
                    To-Do Web Application
                    </h2>
                    
                        {/* Fix the link here */}
                        <a
                            href="https://youtu.be/W_DzoAiHTBQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-lg sm:text-xl italic mt-2 text-blue-700 underline hover:text-red-500 cursor-pointer'
                        >
                            (Click here for YouTube link)
                        </a>
                    
                    <p className="mt-4 text-sm sm:text-base lg:text-lg">
                    This project is a web-based to-do application designed to help users manage their tasks efficiently. It allows users to add, edit, and delete tasks, as well as mark them as completed. The application is built with a combination of HTML, CSS, and JavaScript for the front end, and Java using NetBeans for the back end.
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-2">
                        {[
                            "#HTML",
                            "#CSS",
                            "#javascript",
                            "#figma",
                            "#asp",
                            "#java",
                            "#sql",
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
            </div>
        </div>
  )
}

export default Todo