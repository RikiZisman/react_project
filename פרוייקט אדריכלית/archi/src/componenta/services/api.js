import axios from "axios";

export const getService =  (id) => {


        const service =  axios.get(`http://localhost:3000/service/${id}`);

        console.log(service.data);

}

export const createService = ()=>{
        const newService =  axios.post('http://localhost:3000/')
        console.log(error);
    }
