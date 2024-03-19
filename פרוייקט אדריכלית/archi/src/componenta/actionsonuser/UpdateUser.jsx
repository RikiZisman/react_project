import React from "react";
import { updateUser } from '../../api';



export const UpdateUser = () => {

    const data = (event) => {
        event.preventDefault();
        //להכניס 
        const firstName = event.target.elements.firstName.value;
        const LastName = event.target.elements.LastName.value;
        const password = event.target.elements.password.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;

        const user={
            firstName:firstName,
            LastName:LastName,
            password:password,
            phone:phone,
            email:email
        }
        updateUser(password,user)
    }
    return <div>
        <form onSubmit={e => data(e)}>

        
            <label htmlFor="firstName">enter your first name</label>
            <input type="text" id="firstName" />
            <label htmlFor="LastName">enter your user last name</label>
            <input type="text" id="LastName" />
            <label htmlFor="password">enter your password</label>
            <input type="text" id="password" />
            <label htmlFor="phone">enter your phone number</label>
            <input type="number" id="phone" />
            <label htmlFor="email">enter your email</label>
            <input type="email" id="email" />
            <button type="submit" >update</button>
        </form>
    </div>

}