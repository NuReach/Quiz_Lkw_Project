import axios from 'axios';

export const getCourses = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/courses", {
            headers: {
                'Authorization': 'Bearer 5|RwgRKsfHOwnBh02GAg68w8WFTHISMNIoeGdej92Ka9a5cce6', 
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}
