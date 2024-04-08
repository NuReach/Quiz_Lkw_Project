import axios from 'axios';

const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const getSearchExams = async (search,sortBy,sortDir,page )=>{
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/exams/search/${search}/${sortBy}/${sortDir}?page=${page}`, {
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

export const getAllQuestions = async ()=>{
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/questions`, {
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

// export const createExam = async (state) =>{
//     try {
//         const response = await axios.post(`http://127.0.0.1:8000/api/exams/create`,
//         {
//             exam_title : state.
//             course_id : 
//             exam_percentage : 
//             exam_score : 
//             exam_duration : 
//             exam_description : 
//             author :
//             questions :
//         },
//         {
//             headers: {
//                 'Authorization': `Bearer ${token}` , 
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error; // Rethrow the error to handle it in the caller function
//     }
// }