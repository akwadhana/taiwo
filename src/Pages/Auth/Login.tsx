import { useForm } from "react-hook-form";
import { loginUser } from "../../Services/api/auth.api";
import Head from "../../assets/images/Header.png"; 
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Form submitted", data);

    try {
      const response = await loginUser(data);
      if (response?.success) {
        console.log("Login successful", response);
        navigate("/dashboard");
      } else {
        console.error("Login failed", response?.message || "Unknown error");
      }
    } catch (error: unknown) {
      console.error("An unknown error occurred", error);
    }
  };
 
  return (
    <div className="lg:min-h-screen  bg-white">
       <div className="lg:absolute lg: top-5 left-[1400px] mt-5 ml-2 ">
            <Link to="/Home">
              <img className="h-5 lg:h-7 " src={Logo} alt="Logo" />
            </Link>
            </div>
      <div className="flex flex-col lg:flex-row w-full  h-screen">
        <img
          src={Head}
          alt="Decorative"
          className="lg:w-1/2 w-full lg:mt-0 mt-5 px-2 lg:px-0 object-cover "
        />
        <div className="w-full lg:w-[300px] relative lg:ml-50  mt-20 p-10 bg-white rounded-lg">
          <h2 className="text-center text-gray-800 text-3xl mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
       


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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-gray-800 uppercase tracking-wider border border-gray-400 hover:bg-gray-400 hover:text-gray-900 transition duration-300 rounded"
            >
              Login
            </button>
            <div className="mt-5">
            <Link to="/Auth/Register" className="text-black hover:underline ">Create An Account?</Link>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
