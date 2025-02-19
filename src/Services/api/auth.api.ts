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
    if (error instanceof Error && "response" in error && error.response) {
      // If error has a response, return the error response data
      throw (error as any).response.data;
    } else if (error instanceof Error) {
      // If error is a standard JS Error, throw the error message
      throw error.message;
    } else {
      // Handle completely unknown errors
      throw "An unknown error occurred";
    }
  }
};

export const registerUser = (payload: RegisterPayload) => 
  apiRequest("/api/user/register", payload);

export const loginUser = (payload: LoginPayload) => 
  apiRequest("/api/user/login", payload);
