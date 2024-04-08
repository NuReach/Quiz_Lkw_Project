import axios from 'axios';

const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const getCourses = async () => {

    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/courses`, {
            headers: {
                'Authorization':  `Bearer ${token}`, 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

export const createCourse = async (state) =>{
    const code = state.code.toLowerCase();
    const title = state.title.toLowerCase();
    try{
       await axios.post("http://127.0.0.1:8000/api/courses/create",
                {course_code:code , course_title:title,author:user.user_id},
                {
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                }
                )
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const getCourseById = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/courses/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}` , 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

export const getSearchCourse = async (search,sortBy,sortDir,page ) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/courses/search/${search}/${sortBy}/${sortDir}?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${token}` , 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

export const updateCourse = async (state) => {
    const code = state.course_code.toLowerCase();
    const title = state.course_title.toLowerCase();
    const id = state.id;
    try{
       await axios.put(`http://127.0.0.1:8000/api/courses/update/${id}`,
                {course_code:code , course_title:title},
                {
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                }
                )
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const deleteCourse = async (state) => {
    const id = state.id;
    try{
        await axios.delete(`http://127.0.0.1:8000/api/courses/delete/${id}`,
                 {
                     headers : {
                         'Authorization': `Bearer ${token}`
                     }
                 }
                 )
     }catch (error){
         console.log(error);
         throw error;
     }
}
