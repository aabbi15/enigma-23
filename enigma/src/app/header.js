
"use client"
import { useEffect, useState } from 'react';

import Image from 'next/image';
import userpg from '../images/userpg.png'
import mylogo from '../images/mypng.png'



export default function Header() {

    const [name, Setname] = useState('name');
    const [islogged, Setislogged] = useState(true);

    function Profile() {
        if (islogged) {
            return (
            
                 <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            
                 <a class="font-medium text-white hover:text-accent-green focus:text-highlight-teal" href="#">View history</a>
                 <a class="font-medium text-white hover:text-accent-green  focus:text-yellow" href="#">Report Symptoms</a>
                 {/* <a class="font-medium text-white hover:text-accent-green  focus:text-highlight-teal" href="#">Account</a> */}
                 <a href='\me' className='flex justify-center items-center text-gray-100 rounded-full bg-highlight-teal bg-opacity-90 hover:underline'>

                    <Image
                        src={userpg}
                        alt="Picture of the author"
                        className="w-11 h-11 rounded-l-full p-2 "
                    />
                    <div className=' pr-4 p-2 h-11 flex items-center  border-1 border-slate-400 rounded rounded-r-full'>{name}</div>
                </a>
               </div>
                
            );

        }
        else {
            return (
                <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">

                    <a href="/login" className="text-white hover:border-2 border-green-500 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Log in</a>
                    <a href="/signup" className="text-white hover:border-2 border-green-500 bg-primary-700 hover:bg-primary-800 focus:ring-4  font-medium rounded-lg text-sm px-4 lg: py-2 lg:py-2.5 mr-2  ">Create an account</a>

                </div>
            )
        }


    }

    function Submissions() {
        if (islogged) {
            return (
                <li>
                            <a href="/submissions" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Submissions</a>
                        </li>
                
            );

        }
        else {
            return (
                <>
                    
                </>
            )
        }


    }
    return (
      <div class='bg-page-background'>
       
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-primary-blue text-sm py-4 ">
      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between h-14" aria-label="Global">
        <div class="flex items-center justify-between">
          <a class="inline-flex  items-center  text-xl font-semibold text-white" href="#">
          <Image
                        src={mylogo}
                        alt="Picture of the author"
                        className="w-32 h-16 -ml-2 object-fit"
                    />
            <span className='mx-3 w-auto text-3xl'>Wellness Nexus</span>
          </a>
          <div class="sm:hidden">
            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-image-and-text-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
         <Profile/>
        </div>
      </nav>
    
    </header>
  
   
   
    </div>
    
    
      );
  
  }