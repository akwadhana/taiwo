import axios from "axios";
import axiosInstance from "../../Util/Https";

interface RegisterPayload {
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

const apiRequest = async (endpoint: string, payload: object) => {
  try {
    const response = await axiosInstance.post(endpoint, payload);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      
      throw error.response?.data || "An error occurred with the request";
    } else if (error instanceof Error) {
      
      throw error.message;
    } else {
      
      throw "An unknown error occurred";
    }
  }
};

export const registerUser = (payload: RegisterPayload) => 
  apiRequest("/api/user/register", payload);

export const loginUser = (payload: LoginPayload) => 
  apiRequest("/api/user/login", payload);
