import axios from 'axios';

const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const getSearchNotfication = async (search,sortBy,sortDir,page )=>{
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/notifications/${search}/${sortBy}/${sortDir}?page=${page}`, {
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

export const createNotificationApi = async (state) =>{
    console.log(state);
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/notifications/create`,
        {
            message : state.message,
            desc:state.desc,
            user_id : user.user_id,
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


export const deleteNotification = async (state) => {
    const id = state.id;
    try{
        await axios.delete(`http://127.0.0.1:8000/api/notifications/delete/${id}`,
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
