import React from "react";
import { createaBusiness } from '../business/api'

export const Business = () => {

    const createBusiness = (event) => {
        event.preventDefault();
        const business={
            name:"אדריכלות",
            adress:"מודיעין עילית",
            number:"028974151",
            email:"architecture@gmail.com",
            userId:"a85db547-963c-4e58-9b58-3953d136bc7f"
        }
       
        createaBusiness(business);
    }
    return <div>
        <form onSubmit={e=> createBusiness }>
            <button type="submit">create</button>
        </form>
    </div>
}