import Image from 'next/image'
import Header from './header.js'
import Footer from './footer.js';
export default function Home() {
  return (
    <div class='mymain'>
     
 
    <Header/>
 
  <div class="min-h-screen grid grid-cols-2 p-5 bg-gray-100">
  <div class="row1col1">
  <div class="h-full w-full rounded-lg hover:bg-gradient-to-r from-blue-600 to-green-600 bg-opacity-30 p-0.5">

  <a href="#" class="block w-full   p-5   bg-gray-100 border   rounded-lg shadow-xl hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-600">About us</h5>
    <p class="font-normal text-gray-700 ">
Welcome to Wellness Nexus, where we're dedicated to transforming healthcare resource management for a healthier world. Our mission is to revolutionize the way healthcare entities coordinate, allocate resources, and provide efficient patient care, regardless of the challenges that arise.
</p>
</a>
</div>
  </div>
  <div class=" ro1col2 ">

  </div>
  <div class="row2col1"></div>
  <div class="row2col2 ">
  <div class="h-full w-full -ml-6 -mt-10 rounded-lg hover:bg-gradient-to-r from-blue-600 to-green-600 bg-opacity-30 p-0.5">

  <a href="#" class="block w-full pt-10 p-6   bg-gray-100 border   rounded-lg shadow-xl hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-600">Our Vision</h5>
    <p class="font-normal text-gray-700 ">
    At Wellness Nexus, we envision a healthcare ecosystem where every patient receives timely and appropriate care, every hospital operates seamlessly, and every healthcare professional is empowered with data-driven insights. Our innovative approach brings together technology, data analytics, and resource allocation strategies to ensure optimal patient outcomes. We provide a comprehensive Healthcare Resource Management System that empowers hospitals, healthcare professionals, laboratories, and medicine stockpiles to collaborate seamlessly. Our platform offers real-time coordination and data-driven insights that enable healthcare entities to make informed decisions and enhance their response to public health emergencies</p>
</a>
</div>
  </div>
  <div class=" row3col1">
  <div class=" h-full w-full -mr-8 -mt-8 rounded-lg hover:bg-gradient-to-r from-blue-600 to-green-600 bg-opacity-30 p-0.5">

  <a href="#" class="block w-full pt-10 p-6 bg-gray-100 border rounded-lg shadow-xl hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-600">Why Choose us?</h5>
    <p class="font-normal text-gray-700 ">

    - Expertise: Our team comprises professionals with a deep understanding of healthcare systems and technology, ensuring a solution tailored to your needs.
<br/>
- Innovation: We leverage the latest advancements in technology, data analytics, and resource management strategies to provide cutting-edge solutions.
<br/>
-Impact: By optimizing healthcare resource management, we contribute to better patient outcomes, reduced strain on healthcare systems, and improved crisis response.
</p>
</a>
</div>
  </div>
  <div class=" row3col2"></div>
  <div class='row4col1'></div>
  <div className='row4col2'> 
  <div class="h-full w-full -ml-6 -mt-10 rounded-lg hover:bg-gradient-to-r from-blue-600 to-green-600 bg-opacity-30 p-0.5">

  <a href="#" class="block w-full pt-10 p-6   bg-gray-100 border   rounded-lg shadow-xl hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-600">Join us in the Healthcare Revolution</h5>
    <p class="font-normal text-gray-700 ">
    At Wellness Nexus, we believe that efficient healthcare resource management is the cornerstone of effective patient care. Join us in this transformative journey to build a resilient healthcare system that benefits patients, healthcare professionals, and communities alike. Together, we can shape a healthier future.
    </p>
    </a>
    </div>


  </div>


  </div>
  <Footer/>

  </div>
  
  
    );

}