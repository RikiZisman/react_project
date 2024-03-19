import React from "react";
import { useParams } from 'react-router-dom';


export const Service=()=>{

    const {service}=useParams();

    const saveInfo=(event)=>{
        event.preventDefaulet();
        const name = event.target.elements.name.value;
        const description = event.target.elements.name.value;
        const price = event.target.elements.name.value;
        const time = event.target.elements.name.value;
        const amountMeeting = event.target.elements.name.value;

        Service={
            "business_id": "076c68e6-7811-447d-9b40-fe9d5f620282",
            name:name,
            service:{
            descerpetion: description,
              price: price,
              time: time,
              AmountOfmeatings: AmountOfmeatings
            }

        // const form= event.target;
        // //??
        // const newCustemer=Object.fromEntries([...(new FormData(form)).entries()]);
        // newCustemer.id=cusumers[cusumers.length-1].id+1;
        // newCustemer.phone=entries().phone;
        // newCustemer.name=entries().name;
        //  //??
        // cusumers.push(newCustemer);
        // form.reset();
    }

    return  <div>
         <form onSubmit={e=>saveInfo(e)} >
            <div>
                <label htmlFor="name">enter type of service</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="description">enter a description</label>
                <input type="text" id="description" />
            </div>

            <div>
                <label htmlFor="price">enter price</label>
                <input type="date" id="price" />
            </div>

            <div>
                <label htmlFor="time">amount of time</label>
                <input type="number" id="time" />
            </div>

            <div>
                <label htmlFor="amountMeeting">amount of meeting</label>
                <input type="number" id="amountMeeting" />
            </div>
            <button type="submit">to schedule a meeting </button>
            
        </form>

    </div>
    
   
}
 }