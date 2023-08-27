"use client"
import { useState,useEffect } from 'react';
import cities from 'C:/Users/abhis/OneDrive/Desktop/enigma-23/data/cities.json' assert { type: 'json' };


import Image from 'next/image'
import Header from '../../header.js'
import Footer from '@/app/footer.js';

export default function Home() {

    const [name, Setname] = useState('');
    const [email, Setemail] = useState('');
    const [password, Setpassword] = useState('');
    const [zipcode, Setzipcode] = useState('');
    const [age, Setage] = useState();
    const [gender,Setgender] = useState('');
    const [bloodgroup,Setbloodgroup] = useState('');
    const [address,Setaddress] = useState('');

    const [sendalert, Setsendalert] = useState('wow');
    const [currState, SetcurrState] = useState('Andaman and Nicobar Islands');
    const [currCity, SetcurrCity] = useState('Port Blair');




    
    

    function statemenu(){
        const statelist=[]
        for(const state in cities){
            statelist.push(<option value={state}>{state}</option>);

        }
        return statelist;
            
           
            

        
    }

    const handleStateChange= (event) =>{
        SetcurrState(event.target.value);   
        SetcurrCity(cities[currState][0])
        
    };

    function citymenu(){
        const citylist=[];
        
        for(const city of cities[currState]){
            citylist.push(<option value={city}>{city}</option>);
        }
        return citylist;
           
            

        
    }
    

    
    
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

  async function handleSignup(){
      const user = {
        name:name,
        email:email,
        password:password,
        pincode:pincode,
        age:age,
        address:address,
        gender:gender,
        bloodgroup:bloodgroup,
        city:currCity,
        state:currState,
        type:"patient"

      }
       
      fetch ("http://localhost:5173/signup/patient", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
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
          }
        ).catch(
        err=>{
          console.log(err.msg);
        }
      )
    }


    return (
        <div class='mymain'>


            <Header />

            <div className='min-h-screen bg-slate-300'>
                <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                    <div class="container max-w-screen-lg mx-auto">
                        <div className='text-black'>


                            <div class="bg-white rounded shadow-lg  shadow-teal-500  p-4 px-4 md:p-8 mb-6">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div class="text-gray-600">
                                        <p class="font-extrabold text-xl mb-3">Personal Details</p>
                                        <p className='text-lg'>Please fill out all the fields.</p>
                                    </div>

                                    <div class="lg:col-span-2">
                                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div class="md:col-span-5">
                                                <label for="full_name">Full Name</label>
                                                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Steve Rogers" />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label for="email">Email Address</label>
                                                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label for="address">Address</label>
                                                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="My Adress" />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label for="address">Password</label>
                                                <input type="text" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter your password " />
                                            </div>

                                            <div class="md:col-span-3">
                                                <label for="city">City</label>
                                                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <select onChange={(e)=>SetcurrCity(e.target.value)} className='w-full bg-gray-50'>
                                                        {citymenu()}
                                                    </select>
                                                    </div>
                                            </div>



                                            <div class="md:col-span-2">
                                                <label for="state">State</label>
                                                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <select   onChange={handleStateChange} className='w-full bg-gray-50'>
                                                        {statemenu()}
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="zipcode">Zipcode</label>
                                                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="390015" />
                                            </div>

                                            <div className='md:col-span-3'></div>

                                            <div class="md:col-span-3">
                                                <label for="zipcode">Blood Group</label>
                                                <input type="text" name="blood" id="blood" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="zipcode">Age</label>
                                                <input type="text" name="age" id="age" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>


                                            <div class="md:col-span-3 flex  items-center justify-evenly">
                                                <label for="gender" className='mr-4 font-semibold'>Gender</label>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="male"
                                                        name="gender"
                                                        value="male"
                                                        className="form-radio h-4 w-4 text-blue-500"
                                                    />
                                                    <label htmlFor="male" className="">Male</label>
                                                </div>
                                                <div className="flex items-center ">
                                                    <input
                                                        type="radio"
                                                        id="female"
                                                        name="gender"
                                                        value="female"
                                                        className="form-radio h-4 w-4 text-pink-500"
                                                    />
                                                    <label htmlFor="female" className="">Female</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        id="other"
                                                        name="gender"
                                                        value="other"
                                                        className="form-radio h-4 w-4 text-purple-500"
                                                    />
                                                    <label htmlFor="other" className="mr-2">Other</label>
                                                </div>
                                            </div>
                                            <div className="md:col-span-5 m-4">
                                                {alert()}
                                            </div>



                                            <div className="md:col-span-5 text-right  mr-6">
                                                <div class="inline-flex ">
                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={handleSignup}>Submit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />

        </div>


    );

}