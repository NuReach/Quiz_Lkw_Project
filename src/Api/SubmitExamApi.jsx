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

export const getUserResultApiByTeacher = async (exam_id,user_id) => {
    console.log(exam_id,user_id);
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get/user/result/${user_id}/${exam_id}`, 
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

export const getExamList = async (search,sortBy,sortDir,page) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getResult`, 
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

export const getResultStudentScoreApi = async (id) => {
   if (id == null) {
     return [];
   }else{
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/getResult/studentScore/${id}`, 
            {
                headers: {
                    'Authorization': `Bearer ${token}` , 
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rethrow the error to handle it in the caller function
        }
    }
}

export const getUserResultsList = async () => {
    const user_id = user.user_id;       
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get/user/result/${user_id}`, 
        {
            headers: {
                'Authorization': `Bearer ${token}` , 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

export const getUserExamsList = async () => {
    const user_id = user.user_id;       
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get/user/exams/${user_id}`, 
        {
            headers: {
                'Authorization': `Bearer ${token}` , 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}