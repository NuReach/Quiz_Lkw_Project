import axios from "axios";

const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const getTeachDashboardDetail = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/teacher/dashboard`, {
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

export const getUserDashbooardApi = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user/dashboard/${user.user_id}`, {
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