import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[-90px]">
        <a href="" className="flex flex-col items-center">
          <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] mt-1 relative hover:scale-110 ease-in-out duration-100 group">
            Latest Work
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-14 h-14 fill-current text-white"
          >
            <title>Artboard-33</title>
            <g id="Down">
              <polygon points="18.294 16.793 13.001 22.086 13.001 1 12.001 1 12.001 22.086 6.706 16.792 5.999 17.499 12.501 24 19.001 17.5 18.294 16.793" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
