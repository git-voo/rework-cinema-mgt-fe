 
 import { axiosInstance } from "./AxiosInstance";
 

export async function handleLogin(payload) {  
  let data, error;
  try {
    const response = await axiosInstance.post(`/auth/user/login`, payload);
    data = response.data.data;
    localStorage.setItem("primeUser", JSON.stringify(data));
    

  } catch (err) {
    error = err;
  }
 
  return { data, error };
}
