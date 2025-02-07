import React from 'react';
import PMS from './PMS';
import Sweet from './Sweet';
import Todo from './Todo';

const Work = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="max-w-[1400px] w-full flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold border-4 border-[#9ecccc] p-4 rounded-lg">
          Latest{" "}
          <span className="text-[#00FFFF] italic font-bold">Works</span>
        </h1>

        <PMS/>
        <Sweet/>
        <Todo/>
        
      </div>
    </div>
  );
};

export default Work;
