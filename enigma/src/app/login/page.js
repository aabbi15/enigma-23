"use client"
import { useState } from 'react';

import Header from "../header"
import Footer from "../footer"


export default function Login(){

    const [sendalert, Setsendalert] = useState('wow');
	const [email,Setemail] = useState('');
	const [ password,Setpassword] = useState('');
	const [type,Settype] = useState('hospital')
    const alert = () => {

        if (sendalert) {
            return (
                <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Warning alert!</span> {sendalert}
                    </div>
                </div>
            );
        }
        else {
            return (
                <></>
            )
        }
    }

	async function handleLogin(){
      

		const user = {
		  
		  email:email,
		  password:password
		}
  
  
		 
		fetch ("http://localhost:5173/login", {
		  
		  method: 'POST',
		  headers: {'Content-Type': 'application/json',},
		  body: JSON.stringify(user),
		  withCredentials: true,
		  credentials: 'include',
		}).then(
		  (response) => {
		   console.log("fetched");
		  
		   return response.json();
		   
		  
		  }).then(data => {
			if(data.status!=200){
			  Setsendalert(data.msg);
			 }
			 else{
			  Setsendalert('');
			  
			 }
			
			 if(data.url) {
			  console.log(data.url);
			  window.location.replace(data.url);
			 }
			 else console.log(data);
			})
		  .catch(
		  err=>{
			console.log(err.msg);
		  }
		)
	  }
   
    return(
        <div>
             <Header/>
<div class="h-screen border-2 border-gray-300 md:flex">

	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-accent-green i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">Wellness Nexus</h1>
			<p class="text-white mt-1">Dedicated to your care.</p>
			<button type="submit" class="block w-full bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Create New Account</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white text-gray-800">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 justify-center">
            <select onChange={(e) => Settype(e.target.value)} className='w-full h-full'>
  <option value="hospital">Hospital</option>
  <option value="patient">Patient</option>
  <option value="laboratory">Laboratory</option>
  
</select>
				
      </div>
				
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input value={email} onChange={(e) => Setemail(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input value={password} onChange={(e) => Setpassword(e.target.value)} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>

      <div className='pt-5'>{alert()}</div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form>
	</div>

</div>
<Footer/>
</div>
    )
}