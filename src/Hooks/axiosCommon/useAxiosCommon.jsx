import axios from "axios";
const axiosCommon = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true
});
const useAxiosCommon = () => {
  return axiosCommon;
};
export default useAxiosCommon;
