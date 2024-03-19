import React from "react";
import { getUser } from '../api'
import './home.css'
import { useContext } from 'react';
import { UserContext } from '../context/usercontext'

export const About = () => {

    const user = useContext(UserContext)

 

    

    return (
        <>
            <div>
                <h1>T.R.L architecture</h1>
                <h2>We design your dream for you</h2>



            </div>
        </>

    )

}