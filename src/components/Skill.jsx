import React from 'react'
import './progress.css';


const Skill = () => {
    return (
        <div className="max-w-full sm:mt-24 md:mt-1">
            <div class="flex justify-center items-center flex-col">
                <h1 class="text-center text-6xl  border-[#9ecccc] border-4 text-white p-3  rounded-lg ">
                    MY
                    <span class="text-[#00FFFF] italic font-bold">SKILLS</span>
                </h1>

                {/* <!-- HEADING H2 --> */}



                <div class="flex justify-around w-full flex-col mt-3 tablet   sm:flex sm:flex-col   lg:flex-row  xl:flex-row   p-4 2xl:flex-row">

                    {/* <!-- TECHNICAL SKILLS  --> */}
                    <div class=" p-7 flex flex-col justify-center items-center">
                        <h2 class="text-center text-3xl font-['Merriweather'] "><u>Technical Skills</u></h2>

                        {/* <!-- HTML --> */}
                        <div class="my-5 p-3">

                            <svg fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 124 141.53199999999998">
                                <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" />
                                <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" />
                                <path
                                    d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                                    fill="#fff" />
                            </svg>

                            <h3 class="font-bold">HTML <span class="italic"> 95%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[380px] bg-[#00FFFF]  absolute rounded-lg ">

                                </div>

                            </div>

                        </div>

                        {/* <!-- CSS  --> */}

                        <div class="my-5 p-3">

                            <svg fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 124 141.53">
                                <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
                                <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
                                <path
                                    d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                                    fill="#fff" />
                            </svg>

                            <h3 class="font-bold">CSS <span class="italic"> 90%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[350px] bg-[#00FFFF]  ">

                                </div>
                            </div>

                        </div>


                        {/* <!-- JavaScript  --> */}

                        <div class="my-5 p-3">

                            <svg fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 124 141.53199999999998">
                                <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" />
                                <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" />
                                <g fill="#fff">
                                    <path
                                        d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
                                </g>
                            </svg>

                            <h3 class="font-bold">JAVASCRIPT <span class="italic"> 85%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[300px] bg-[#00FFFF]  ">

                                </div>
                            </div>

                        </div>

                        {/* <!-- React  --> */}

                        <div class="my-5 p-3">

                            <svg height="30" width="30" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>

                            <h3 class="font-bold">REACT<span class="italic"> 70%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[300px] bg-[#00FFFF] ">

                                </div>
                            </div>

                        </div>

                        {/* <!-- BOOTSTRAP  --> */}

                        <div class="my-5 p-3">

                            <svg height="30" viewBox="0 0 512 407.864" width="30" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z"
                                    fill="#7952b3" fill-rule="evenodd" />
                            </svg>

                            <h3 class="font-bold">BOOTSTRAP <span class="italic">80%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[270px] bg-[#00FFFF] ">

                                </div>
                            </div>

                        </div>

                        {/* <!-- TAILWIND  --> */}

                        <div class="my-5 p-3">

                            <svg height="30" preserveAspectRatio="xMidYMid" width="30"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6">
                                <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                                    <stop offset="0" stop-color="#2298bd" />
                                    <stop offset="1" stop-color="#0ed7b5" />
                                </linearGradient>
                                <path
                                    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                                    fill="url(#a)" />
                            </svg>

                            <h3 class="font-bold">TAILWIND <span class="italic">80%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[220px] bg-[#00FFFF] ">

                                </div>
                            </div>

                        </div>

                        {/* <!-- FIGMA  --> */}

                        <div class="my-5 p-3">

                            <svg fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                                viewBox="1.466 2.199 285.068 427.602">
                                <path d="M1.466 2.2h285.068V429.8H1.466z" stroke-width="3" />
                                <path
                                    d="M144 216c0-39.359 31.907-71.267 71.267-71.267 39.359 0 71.267 31.908 71.267 71.267 0 39.36-31.908 71.267-71.267 71.267C175.907 287.267 144 255.36 144 216z"
                                    fill="#1abcfe" />
                                <path
                                    d="M1.466 358.534c0-39.359 31.907-71.267 71.267-71.267H144v71.267c0 39.36-31.907 71.267-71.267 71.267S1.466 397.894 1.466 358.534z"
                                    fill="#0acf83" />
                                <path
                                    d="M144 2.2v142.533h71.267c39.36 0 71.267-31.907 71.267-71.267S254.627 2.2 215.267 2.2z"
                                    fill="#ff7262" />
                                <path
                                    d="M1.466 73.466c0 39.36 31.907 71.267 71.267 71.267H144V2.199H72.733c-39.36 0-71.267 31.908-71.267 71.267z"
                                    fill="#f24e1e" />
                                <path
                                    d="M1.466 216c0 39.36 31.907 71.267 71.267 71.267H144V144.733H72.733c-39.36 0-71.267 31.908-71.267 71.267z"
                                    fill="#a259ff" />
                            </svg>

                            <h3 class="font-bold">FIGMA <span class="italic">70%</span></h3>

                            {/* <!-- PROGRESS BAR OF SKILL --> */}
                            <div class="h-1 w-[400px] bg-white">

                                <div class="h-1 w-[190px] bg-[#00FFFF] ">

                                </div>
                            </div>

                        </div>


                    </div>


                    {/* <!-- PROFESSIONAL SKILLS  --> */}
                    <div class=" p-7">
                        <h2 class="text-center text-3xl font-['Merriweather'] mb-10"><u>Professional Skills</u></h2>

                        {/* <!-- BOX  --> */}
                        <div class="grid grid-cols-2 gap-24 m-5">
                            {/* <!-- CIRCLE 1  --> */}

                            <div class="progress-circle">
                                <div class="circle">
                                    <div class="circle-inner">
                                        <div class="circle-left-half"></div>
                                        <div class="circle-right-half"></div>
                                    </div>
                                    <div class="inside-circle">90%</div>
                                </div>
                                <p>Creativity</p>
                            </div>

                            {/* <!-- CIRCLE 2 --> */}

                            <div class="progress-circle">
                                <div class="circle">
                                    <div class="circle-inner2">
                                        <div class="circle-left-half"></div>
                                        <div class="circle-right-half"></div>
                                    </div>
                                    <div class="inside-circle">70%</div>
                                </div>
                                <p>Communication</p>
                            </div>

                            {/* <!-- CIRCLE 3 --> */}

                            <div class="progress-circle">
                                <div class="circle">
                                    <div class="circle-inner3">
                                        <div class="circle-left-half"></div>
                                        <div class="circle-right-half"></div>
                                    </div>
                                    <div class="inside-circle">75%</div>
                                </div>
                                <p>Problem Solving</p>
                            </div>


                            {/* <!-- CIRCLE 4 --> */}


                            <div className="progress-circle">
                                <div className="circle">
                                    <div className="circle-inner4">
                                        <div class="circle-left-half"></div>
                                        <div class="circle-right-half"></div>
                                    </div>
                                    <div class="inside-circle">85%</div>
                                </div>
                                <p>Teamwork</p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skill