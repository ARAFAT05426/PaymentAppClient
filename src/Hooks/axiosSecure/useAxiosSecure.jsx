import axios from "axios";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("Error from axios interceptor:", error.response);
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        navigate("/userlogin");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
