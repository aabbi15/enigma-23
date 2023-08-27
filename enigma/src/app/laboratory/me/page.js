'use client'
 
import { useParams } from 'next/navigation'
import { useState,useEffect } from 'react';

import Image from 'next/image'
import Header from '../../header.js'
import Footer from '../../footer.js';
export default function Home() {
  useEffect(() => {
    fetch("http://localhost:5173/user/requests", {
        method: 'GET',
        credentials: 'include' // This is important to send cookies
    }).then(response => response.json()).then(data => {

        Setmysubmissions(data);
    })


}, []);


  return (
    <div class='mymain'>
     
 
    <Header/>
<div>
    
</div>
  <Footer/>

  </div>
  
  
    );

}