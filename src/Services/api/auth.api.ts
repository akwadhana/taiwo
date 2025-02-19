// import { loginUser, registerUser } from "../api/auth.api";
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
    throw error.response?.data || error;
  }
};

export const registerUser = (payload: RegisterPayload) => 
  apiRequest("/api/user/register", payload);

export const loginUser = (payload: LoginPayload) => 
  apiRequest("/api/user/login", payload);

