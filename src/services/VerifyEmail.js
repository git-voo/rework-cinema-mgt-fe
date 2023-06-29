import { axiosInstance } from "./AxiosInstance";

export async function verifyEmail(payload) {
  if (!payload) return false;
  let { data, error } = "";
  try {
    await axiosInstance.post("/auth/verify", payload).then((resp) => {
      data = resp.data.data;
    });
  } catch (err) {
    error = err;
  }

  return { data, error };
}

// Use this to verify any email and code sent to it. 
// two parameters are required, the email, and the code received by user
