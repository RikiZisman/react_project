import React from "react";
import { signIn } from '../../api';
// import { Link } from "react-router-dom";


export const SighnIn = () => {
 

    const data = (event) => {
        event.preventDefault();
        const password = event.target.elements.password.value;
        const name = event.target.elements.username.value;
        console.log(password);
        console.log(name);
        const user={password:password,username:name};
        console.log(user);
        signIn((user));
        // event.target.elements.id.value="";
        // event.target.elements.username.value="";


    }

    return <div>
        <form onSubmit={e => data(e)}>
            <label htmlFor="password">Enter your password:</label>
            <input type="text" id="password" />
           
            <label htmlFor="username">Enter user name</label>
            <input type="text" id="username" />
            <button type="submit" >sighn in</button>
        </form>


    </div>


}


