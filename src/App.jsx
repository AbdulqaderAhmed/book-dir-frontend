import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/book/Home";
import PrivateRoute from "./utils/PrivateRoutes";
import AddBooks from "./pages/book/AddBooks";
import { useSelector } from "react-redux";
import Header from "./include/Header";
import Detail from "./pages/book/Detail";

export default function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {user && <Header />}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/create" element={<AddBooks />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}
