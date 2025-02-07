import React, { useEffect } from "react";
import './tooltip.css';

const Contact = () => {

    useEffect(() => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbywkzs4veFprQoI_-AFBNoWt-ddO8azP0klRZjVoY_LBrdq8rQOfDEY--k7azRyS_uP9w/exec";
        const form = document.forms["submit-to-google-sheet"];
        const msg=document.getElementById("msg")

        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                fetch(scriptURL, { method: "POST", body: new FormData(form) })
                    .then((response) => {
                        msg.innerHTML="Message Sent Successfully"
                        setTimeout(function(){
                            msg.innerHTML=""
                        },5000)
                        form.reset()
                    })
                    .catch((error) => console.error("Error!", error.message));
            });
        }

        return () => {
            if (form) {
                form.removeEventListener("submit", () => {});
            }
        };
    }, []);

    return (
        <div class="flex justify-evenly mt-16 flex-col lg:flex-row  xl:flex-row  2xl:flex-row p-4 sm:flex sm:flex-col " id="contactMesectionContainer">

            {/* <!-- ************ DETAILS *************  --> */}

            <div class="flex flex-col justify-center p-5 gap-9">
                <h1 class="text-[60px] text-[#fff] font-['spartan']">Contact Me</h1>

                {/* <!-- for email  --> */}
                <div>

                    <a href="mailto:jiyak3395@gmail.com" target="_blank" class="flex gap-4 hover:text-[#FFFF00]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                            <path fill="currentColor"
                                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>
                        jiyak3395@gmail.com
                    </a>
                </div>

                {/* <!-- for phone  --> */}

                <div>

                    <a href="tel:9142490309" target="_blank" class="flex gap-4 hover:text-[#FFFF00]">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor" stroke="#fff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-phone">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                            </path>
                        </svg>
                        9142490309
                    </a>

                </div>

                {/* <!-- SOCIAL MEDIA  --> */}

                <div class="flex">
                    <ul class="flex gap-3">
                        <li class="tooltipSocial">
                            <span class="github">Github</span>
                            <a href="https://github.com/JiyaSahu" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30"
                                    class=" hover:text-[#fff]">
                                    <path fill="currentColor"
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </a>

                        </li>
                        <li class="tooltipSocial">
                            <span class="linkdin">Linkdin</span>
                            <a href="https://www.linkedin.com/in/jiya-kumari-216002313/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30"
                                    class=" hover:text-[#0371ae]">

                                    <path fill="currentColor"
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </a>
                        </li>
                        <li class="tooltipSocial">
                            <span class="instagram">InstaGram</span>
                            <a href="" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30"
                                    class="hover:text-[#d12c7a]">

                                    <path fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>

                            </a>
                        </li>
                        <li class="tooltipSocial">
                            <span class="youtube">Youtube</span>
                            <a href="https://www.youtube.com/@jiyakumari2524" target="_blank">

                                <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-[#FF0000]"
                                    viewBox="0 0 512 512" width="30" height="30" fill="currentColor">
                                    <path
                                        d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
                                </svg>


                            </a>

                        </li>
                    </ul>
                </div>

                <a href="public/Jiya_Resume_Final_5.pdf" download>
                    <button class="bg-[#4595eb] p-3 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]  relative hover:scale-110 ease-in-out duration-100 group  w-[200px]
                    ">Download Resume
                    </button>
                </a>
            </div>

            {/* <!-- FORM  --> */}

            <div class="flex flex-col " id="formBox">
                <form name="submit-to-google-sheet" class="flex flex-col gap-7 p-4 ">
                    <input type="text" name="Name" placeholder="Your Name" class="bg-gray-800 w-[400px] h-12 p-2 outline-[#00FFFF] 
                    hover:ease-in-out hover:delay-150  hover:transition hover:duration-300
                    hover:cursor-pointer
                    hover:shadow-lg
                    hover:shadow-[#00FFFF]
                    hover:border hover:border-[#00FFFF] hover:text-[#00FFFF] 

                    "/>
                    <input type="email" name="Email" id="" placeholder="Your Email" class="bg-gray-800 w-[400px] h-12 p-2 outline-[#00FFFF] 
                    hover:ease-in-out hover:delay-150  hover:transition hover:duration-300
                    hover:cursor-pointer
                    hover:shadow-lg
                    hover:shadow-[#00FFFF]
                    hover:border hover:border-[#00FFFF] hover:text-[#00FFFF] 
                    "/>

                    <textarea name="Message" id="" placeholder="Your Message" class="bg-gray-800 w-[400px] h-[150px] p-2 outline-[#00FFFF] 
                    hover:ease-in-out hover:delay-150  hover:transition hover:duration-300
                    hover:cursor-pointer
                    hover:shadow-lg
                    hover:shadow-[#00FFFF]
                    hover:border hover:border-[#00FFFF] hover:text-[#00FFFF] 
                    ">


                    </textarea>


                    <button class="bg-[#4595eb] p-3 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6]  relative hover:scale-110 ease-in-out duration-100 group  w-[200px]
                    " type="submit">Submit</button>
                </form>
                <span id="msg" class="text-[#61b752] mt-[-10px] block ml-4"></span>
            </div>

        </div>
    )
}

export default Contact