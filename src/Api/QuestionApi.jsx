import axios from 'axios';

const user = JSON.parse(localStorage.getItem('userData'));
const token = user.token;

export const getSearchQuestions = async (search,sortBy,sortDir,page )=>{
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/questions/search/${search}/${sortBy}/${sortDir}?page=${page}`, {
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