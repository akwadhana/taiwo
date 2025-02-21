import { useForm } from "react-hook-form";
import { registerUser } from "../../Services/api/auth.api";
import { Link, useNavigate } from "react-router-dom";
import Head from "../../assets/images/Header.png"; 
import { Logo } from "../../assets";

interface SignupFormInputs {
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
  } = useForm<SignupFormInputs>();

  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormInputs) => {
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
      console.error("An unknown error occurred", error);
    }
  };

  return (
    <div className="lg:min-h-screen bg-white">
        <div className="lg:absolute lg: top-5 left-[1400px] mt-5 ml-3 ">
            <Link to="/Home">
              <img className="h-5 lg:h-7 " src={Logo} alt="Logo" />
            </Link>
            </div>
      <div className="flex flex-col lg:flex-row w-full h-screen">
     
        <img
          src={Head}
          alt="Decorative"
          className="lg:w-1/2 w-full px-2 lg:px-0 mt-5 lg:mt-0  object-cover"
        />

        <div className="w-full relative lg:w-[400px] lg:ml-50 mt-20 p-10 bg-white rounded-lg">
          <h2 className="text-center text-gray-800 text-3xl mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className="w-full p-2 bg-transparent border-b border-gray-800 text-gray-800 outline-none focus:border-gray-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

          
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full p-2 bg-transparent border-b border-gray-800 text-gray-800 outline-none focus:border-gray-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full p-2 bg-transparent border-b border-gray-800 text-gray-800 outline-none focus:border-gray-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className="w-full p-2 bg-transparent border-b border-gray-800 text-gray-800 outline-none focus:border-gray-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-gray-800 uppercase tracking-wider border border-gray-400 hover:bg-gray-400 hover:text-gray-900 transition duration-300 rounded"
            >
              Sign Up
            </button>
            
            <div className="mt-5">
            <Link to="/Auth/Login" className="text-black hover:underline ">Login</Link>
            </div>
      


          </form>

        </div>

  
      </div>
    </div>
  );
};

export default SignupForm;
