import axios from "axios";

export const loginApi = async (data) => {
    console.log(data);
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
  