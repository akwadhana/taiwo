import { useForm } from "react-hook-form";
import { registerUser } from "../../Services/api/auth.api";
import { useNavigate } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted", data);

    try {
      const response = await registerUser(data);
      if (response?.success) {
        console.log("Registration successful", response);
        navigate("/login");
      } else {
        console.error("Registration failed", response?.message || "Unknown error");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("An error occurred during registration", error.message);
      } else {
        console.error("An unknown error occurred", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
          className="mt-1 p-2 w-full border rounded-md"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}

        <label className="block text-sm font-medium text-gray-700 mt-4">Last Name</label>
        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
          className="mt-1 p-2 w-full border rounded-md"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}

        <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
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

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
