
import axios from "axios";

export const createaBusiness = async (business) => {
  try {
    const newBusiness = await axios.post("http://localhost:3000/business", business);
    console.log(newBusiness.data); 
  } catch (error) {
    console.log(error);
  }
};
