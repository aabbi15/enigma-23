import { useState, useEffect } from 'react';
import Header from '../../header.js';
import Footer from '../../footer.js';

export default function Home() {
  // State to store the fetched data
  const [mySubmissions, setMySubmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/user/requests", {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        setMySubmissions(data);
      })
  }, []);

  return (
    <div className='mymain'>
      <Header />

      {/* Display fetched data */}
      <div className="data-container">
        {mySubmissions.map((submission, index) => (
          <div key={index} className="submission-item">
            <p>Name: {submission.name}</p>
            <p>Request Type: {submission.requestType}</p>
            {/* Add more properties as needed */}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
