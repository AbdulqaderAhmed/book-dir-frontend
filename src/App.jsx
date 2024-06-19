import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/book/Home";
import PrivateRoute from "./utils/PrivateRoutes";
import AddBooks from "./pages/book/AddBooks";
import Header from "./include/Header";
import Detail from "./pages/book/Detail";
import Footer from "./include/Footer";
import EditBook from "./pages/book/EditBook";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/create" element={<AddBooks />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}
