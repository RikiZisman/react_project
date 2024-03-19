import React, { useState } from "react";
import { Serivces } from '../../services';
import { Link } from "react-router-dom";
import { getService } from '../services/api'
import { useEffect } from "react";
import "./meeting.css";


export const Services =  () => {
  const [currentService, setcurerntService]   = useState([]);

  const getAService= async()=>{
      const s= await getService("e18cb0eb-7509-4e13-940c-db26ed3d68f5");
     
      setcurrentService(s);
  }

  useEffect(()=>{

  getAService();
   
  },[]);


  return <div>
    <h2>Our Services</h2>
    <h3>the services {currentService}</h3>
    <ul>
      {

        Serivces.map(servise =>
          <li key={servise.type}><Link to={'/service' + servise.type}></Link>{servise.descerpetion} </li>)
      }
    </ul>
    <Link to={'/'}><button type="submit">Back to home page</button></Link>

    
  </div>


}




