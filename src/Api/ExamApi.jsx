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

export const createExamApi = async (state) =>{
    console.log(state);
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/exams/create`,
        {
            exam_title : state.exam_title,
            course_id : state.course_id,
            exam_percentage : state.exam_percentage,
            exam_score : state.exam_score,
            exam_duration : state.exam_duration,
            exam_description : state.exam_description,
            author : user.user_id,
            questions : state.questions
        },
        {
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