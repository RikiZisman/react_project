import axios from 'axios';
import {UserPage} from './context/Userpage'



export const signIn = async (userinfo) => {
    try {
        const response = await axios.post(`http://localhost:3000/user/signin`, userinfo);
        const userData = (response.data);

        console.log(userData);
        UserPage(JSON.stringify(userData));
        
    } catch (error) {
        console.log(error);
    }
}




export const sighnUp = async (user) => {
    try {
        console.log(user);
        const response = await axios.post(`http://localhost:3000/user`,user = {user});
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
   
   
};

export const updateUser = async (id,user) =>{
    try {
        const updateUser = await axios.put(`http://localhost:3000/user/${id}`,user = {user});
        console.log(updateUser.data);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async(id) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(response.data);
        return response
    } catch (error) {
        console.log(error);
        return null; 
    }

}





export const getAllUsers=()=>{

    axios.get('/', (req, res) => {
        // Read your JSON file or generate JSON data
        const jsonData = {  };
        res.json(jsonData);
    });
}

