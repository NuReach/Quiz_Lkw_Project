import axios from "axios";
const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const submitExamApi = async (state)=>{
    try{
        await axios.post("http://127.0.0.1:8000/api/submitExam/create",
            {
                exam_id : state.exam_id,
                user_id : state.user_id,
                user_answers : state.answer
            },
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

export const getUserResultApi = async (exam_id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get/user/result/${user.user_id}/${exam_id}`, 
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