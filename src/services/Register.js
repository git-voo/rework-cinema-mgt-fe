import { axiosInstance } from "./AxiosInstance";

export async function registerUser(payload) {
  let { data, error } = "";
  try {
    await axiosInstance.post(`/auth/user/register`, payload).then((resp) => {
      data = resp.data.data;
      localStorage.setItem("primeUser", JSON.stringify(data));
    });
  } catch (err) {
    error = err;
  }
  return { data, error };
}
