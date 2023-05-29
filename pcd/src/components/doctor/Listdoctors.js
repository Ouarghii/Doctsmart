import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import bkd from '../../assets/bkd.mp4';
import './ListDoctors.css';
import Layout1 from '../receptionnist/Layout1';

const ListDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/alldoctors');
        setDoctors(response.data.doctors);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className='divregdoctor'>
    <Layout1>
      <div className="doctors-container">
        <h1>List of Registered Doctors:</h1>
        
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : doctors.length > 0 ? (

          <table style={{marginTop:'100px'}} className='listdoct'>
          	 <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Is Admin</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td>{doctor.username}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.isAdmin ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          	</table>

        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </Layout1>
  </div>
  );
};

export default ListDoctors;
