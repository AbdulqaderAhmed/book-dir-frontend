import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../feature/auth/authReducer";
import { toast } from "react-toastify";

export default function SignUp() {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));

    if (user && !isError) {
      toast.success("You are logged in!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/sign-up");
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="bg-gray-300 p-5 max-w-lg mx-auto my-16 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center uppercase my-7 ">
        Sign Up
      </h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(e) =>
            setUserData(() => {
              return { ...userData, username: e.target.value };
            })
          }
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(e) =>
            setUserData(() => {
              return { ...userData, email: e.target.value };
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(e) =>
            setUserData(() => {
              return { ...userData, password: e.target.value };
            })
          }
        />

        <button
          disabled={isLoading}
          type="submit"
          className="bg-slate-700 p-3 uppercase text-white rounded-lg hover:opacity-70 disabled:opacity-90"
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>

      <p className="text-lg text-red-500 my-4">
        {isError && "Something went wrong!"}
      </p>
    </div>
  );
}
