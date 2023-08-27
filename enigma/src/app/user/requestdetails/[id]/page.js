'use client'
 
import { useParams } from 'next/navigation'
import { useState,useEffect } from 'react';

import Image from 'next/image'
import Header from '../../../header.js'
import Footer from '../../../footer.js';
export default function Home() {

  const [status,Setstatus] = useState('accepted');
  

  function statusbox(){
    if(status=='accepted'){
      return(
        <div
  class="text-white py-2 px-4 flex uppercase rounded-xl items-center bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Accepted
</div>
      )
    }
      if(status=='rejected'){
      return(
        <div
  class="text-white py-2 px-4 flex uppercase rounded-xl items-center bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Rejected
</div>
      )
      }
      else{
      return(
        <div
  class="text-white py-2 px-4 flex uppercase rounded-xl items-center bg-yellow-400 hover:bg-yellow-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Waiting
</div>
      )
      }
    }

  
	return (
		<div class='mymain'>


			<Header />
			<div className='min-h-screen bg-slate-300'>
			<div class="p-16">
<div class="p-8 bg-white rounded-xl shadow-lg drop-shadow-lg shadow-teal-200 mt-24">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="grid grid-cols-2 text-center order-last md:order-first mt-20 md:mt-0">
      <div>
        <p class="font-bold text-gray-700 text-xl">22</p>
        <p class="text-gray-400">Weight(kg)</p>
      </div>
      <div>
           <p class="font-bold text-gray-700 text-xl">10</p>
        <p class="text-gray-400">Height(cm)</p>
      </div>
          
    </div>
    <div class="relative">
      <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
      </div>
    </div>

    <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-end">
{statusbox()}

    </div>
  </div>

  <div class="mt-20 text-center border-b pb-8">
    <h1 class="text-4xl font-medium text-gray-700">Jessica Jones <span class="font-light text-gray-500">27</span></h1>
    <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>
	<div className='text-black gap-y-10'>
    <p class="mt-8 text-black text-2xl font-semibold">Title of Report</p>
	<p>Name of Hospital: yoyo</p>
	<p>Due Date: 24/4/2023</p>
	</div>
    
  </div>

  <div class="mt-6 flex flex-col justify-center">
    <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
   
  </div>

</div>
</div>			
</div>
			<Footer />

		</div>


	);

}