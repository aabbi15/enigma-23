import Image from 'next/image'
import Header from '../../header.js'
import Footer from '../../footer.js';
export default function Home() {
  return (
    <div class='mymain'>
     
 
    <Header/>
 <div className='min-h-screen bg-slate-300'>
    {/* <div className='text-4xl text-gray-800 flex-row text-center items-center pt-4 font-extrabold'>My Requests</div> */}
<div class="flex justify-center items-center w-screen pt-10 bg-slate-300 ">
	<div class="container mx-auto my-4 px-4 lg:px-20 ">

		<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-gray-600">
			<div class="flex">
				<h1 class="font-bold uppercase text-5xl">Send a new<br /> request</h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Request Title*" />
				
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Current weight (in kg)*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Current height (in cm)*" />
        </div>
				<div class="my-4">
					<textarea placeholder="Main body of request*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
			</div>

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
				<div class="flex flex-col text-white">
					<h1 class="font-bold uppercase text-4xl my-4">Drop in our office</h1>
					<p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						tincidunt arcu diam,
						eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
					</p>

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            
          </div>
          
       
          
        </div>
      </div>
    </div>
</div>


</div>
  <Footer/>

  </div>
  
  
    );

}