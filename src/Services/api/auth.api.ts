import { LoginUser, RegisterUser } from "../../types";
import axiosInstance from "../../Util/Https";

const apiRequest = async (endpoint: string, payload: object) => {
  try {
    const response = await axiosInstance.post(endpoint, payload);
    return response.data;
  } catch (error: any) {
    // console.error(`Error: ${error.response?.data?.message || error.message}`);
    throw error.response?.data || error;
  }
};

export const registerUser = (payload: RegisterUser) => 
  apiRequest("/api/user/register", payload);

export const loginUser = (payload: LoginUser) => 
  apiRequest("/api/user/login", payload);

