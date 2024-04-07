import axios from 'axios';

const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const getQuestionById =  async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/questions/${id}`, {
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

export const createQuestion = async (state) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/questions/create`,
        {
            question_prompt :  state.question_prompt,   
            question_image : state.question_image == null ? 'no image' : 'img.png' ,
            question_level : state.question_level,
            question_type : state.question_type,
            question_choices : state.question_choices,
            question_mark:state.question_mark,
            author : user.user_id
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


export const updateQuestion = async (state)=>{
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/questions/update/${state.id}`,
        {
            question_prompt :  state.question_prompt,   
            question_image : state.question_image == null ? 'no image' : 'img.png' ,
            question_level : state.question_level,
            question_type : state.question_type,
            question_choices : state.question_choices,
            question_mark:state.question_mark,
            author : user.user_id
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

export const deleteQuestion = async (state) => {
    const id = state.id;
    try{
        await axios.delete(`http://127.0.0.1:8000/api/questions/delete/${id}`,
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
