import axios from "axios";

export default function AxiosConfiguration() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      common: {
        "Content-Type": "application/json",
      },
    },
  });


  instance.interceptors.response.use(
    (response) =>  handleSuccess(response),
    (error) =>  handleError(error)
  );

  function handleError(error) {
    if (error.response.status === 404) { 
      //redirect to Not Found Page
    } else {
      //handle other error codes
    }

    throw error;
  }

  function handleSuccess(response) {
    return response;
  }


  return instance;
}
