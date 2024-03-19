import axios from 'axios';
// קובץ זה מכיל את כל קריאות השרת עבור קטגוריות

// שליפה של כל הרשימה
export const getCategories = () => {
    return axios.get('http://localhost:3000/categories');
}

// מחיקה
export const deleteCategory = (id) => {
    return axios.delete(`http://localhost:3000/categories/${id}`);
}

// עדכון
export const updateCategory = (id, categoryName) => {
    return axios.put(`http://localhost:3000/categories/${id}`, {
        categoryName,
    });
}

// יצירה
export const createMeeting = (name,date,start_time,email) =>{
    console.log("hi");
    return axios.post(`http://localhost:3000/meeting`,{
        business_id:"123",
        start_time,
        duration:"2",
        meeting:{
            name,
            date,
            email
    }
    });
}

// Sign in user
export const SigninUser =  (password) => {
    return  axios.get(`http://localhost:3000/user/${password}`);
 
 };