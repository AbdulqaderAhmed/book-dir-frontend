import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../feature/auth/authReducer";

export default function Header() {
  const { user, isError } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    if (!isError) {
      dispatch(logoutUser());
    }
  };

  return (
    <nav className="bg-gray-200 flex justify-between py-3 shadow-lg">
      <h1 className="text-2xl font-bold uppercase mx-auto">
        <Link to="/">Books store</Link>
      </h1>

      <ul className="flex gap-5 text-xl mx-auto">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        {user ? (
          <div className="dropdown relative inline-block bg-black text-white px-1 rounded-lg cursor-pointer">
            <button onClick={() => setShow(!show)} className="dropbtn">
              {user?.username}
            </button>
            <div
              id="myDropdown"
              className={`dropdown-content flex flex-col gap-2 ${
                show ? "block text-black" : "hidden"
              } absolute top-10 bg-slate-100 min-w-40 overflow-auto shadow-md z-10`}
            >
              <Link to="/create" className="hover:bg-slate-200 px-5 py-2">
                Add book
              </Link>
              <p
                className="hover:bg-slate-200 px-5 py-2"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <Link to="/sign-in">Sign in</Link>
        )}
      </ul>
    </nav>
  );
}
