

import Header from '../header';
import Footer from '../footer';
import Image from 'next/image';
import doctorfemale from '../../images/doctor-female.png';
import lab from '../../images/lab.png';
import patienthappy from '../../images/patient-happy.png';




export default function Signup() {

    

        //   fetch ("http://localhost:5173/signup", {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(user)
        //   }).then(
        //     (response) => {
        //      console.log("fetched");
        //      return response.json();

        //     }).then(data => {
        //       if(data.status!=200){
        //         Setsendalert(data.msg);
        //        }
        //        else{
        //         Setsendalert('');

        //        }
        //       if(data.url) {
        //         console.log(data.url);
        //         window.location.replace(data.url);
        //        }
        //        else console.log(data);
        //       }
        //     ).catch(
        //     err=>{
        //       console.log(err.msg);
        //     }
        //   )
    

    return (
        <div className='mymain'>
            <Header />
            <div class="min-h-screen p-5 bg-slate-300 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 class="mb-3 text-xl font-bold text-indigo-600">Hospital Account</h3>
                    <div class="relative">
                    <Image src={doctorfemale} className='rounded-xl'></Image>
                    </div>
                    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Create a new account for your Hospital!</h1>
                    <div class="my-4">
                      <div className='text-gray-700'>
                        Over 1253 hospitals registered<br/><br/>
                        Be a certified hospital at Wellness Nexus and recieve more patients.<br/>
                        <br></br>
                      </div>
                        <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Hospital Signup</button>
                    </div>
                </div>

                <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 class="mb-3 text-xl font-bold text-indigo-600">Patient Account</h3>
                    <div class="relative">
                    <Image src={patienthappy} className='rounded-xl'></Image>                    </div>
                    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Create a new Patient account for you!</h1>
                    <div class="my-4">
                    <div className='text-gray-700'>
                        Over 1,000,000 people registered<br/><br/>
                        Be a part of  at Wellness Nexus and recieve care efficiently.<br/>
                        <br></br>
                      </div>
                        <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Patient Signup</button>
                    </div>
                </div>

                <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                    <h3 class="mb-3 text-xl font-bold text-indigo-600">Laboratory Account</h3>
                    <div class="relative">
                    <Image src={lab} className='rounded-xl'></Image>                    </div>
                    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Create a new account for your Lab!</h1>
                    <div class="my-4">
                    <div className='text-gray-700'>
                        Over 987 Laboratory registered<br/><br/>
                        Be a certified Laboratory at Wellness Nexus and recieve more report requests.<br/>
                        <br></br>
                      </div>
                        <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Laboratory Signup</button>
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    )
}