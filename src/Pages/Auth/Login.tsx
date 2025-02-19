import { useForm } from "react-hook-form";
import { loginUser } from "../../Services/api/auth.api";
import { useNavigate } from "react-router-dom";
import Head from "../../assets/images/Header.png"; 
interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted", data);

    try {
      const response = await loginUser(data);
      if (response?.success) {
        console.log("Login successful", response);
        navigate("/dashboard");
      } else {
        console.error("Login failed", response?.message || "Unknown error");
      }
    } catch (error: any) {
      console.error("An error occurred during login", error?.message || error);
    }
  };

  return (
    <div className="flex">
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <img
          src={Head}
          alt="Decorative"
          className="lg:min-h-screen lg:w-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          {/* Email Input */}
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Password Input */}
          <label className="block text-sm font-medium text-gray-700 mt-4">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
