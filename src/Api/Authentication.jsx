import axios from "axios";

const user = JSON.parse(localStorage.getItem('userData'));
const token = user?.token;

export const loginApi = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", 
        {
          email: data.email,
          password: data.password,
        },
        {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const userData = response.data;
      const expirationTime = Date.now() + (1 * 24 * 60 * 60 * 1000); 
      userData.expirationTime = expirationTime;
      localStorage.setItem('userData', JSON.stringify(userData));
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the caller function
    }
  }

  export const getUser = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user`, {
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

  export const updateUserApi = async (state)=>{
    const { name , email , id  , user_image , role } = state;
    try {
          const response = await axios.post(`http://127.0.0.1:8000/api/update/user/${id}`, 
          {
            name,
            email,
            user_image,
            role

          },
          {
              headers: {
                  'Authorization': `Bearer ${token}` , 
              }
          });
          return response.data;
      } catch (error) {
          console.error('Error Update data:', error);
          throw error; // Rethrow the error to handle it in the caller function
      }
  }

  export const updatePasswordApi = async (state)=>{
    const current_password = state.currentPw;
    const new_password = state.newPw;
    const id = state.id;
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/update/password/${id}`, 
      {
        current_password,
        new_password
      },
      {
          headers: {
              'Authorization': `Bearer ${token}` , 
          }
      });
      return response.data;
  } catch (error) {
      console.error('Error Update data:', error);
      throw error; // Rethrow the error to handle it in the caller function
  }
  }