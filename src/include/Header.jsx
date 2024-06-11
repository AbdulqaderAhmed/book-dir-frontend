import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className="bg-gray-200 flex justify-between py-3 shadow-lg">
      <h1 className="text-2xl font-bold uppercase mx-auto">
        <Link to="/">Books</Link>
      </h1>

      <ul className="flex gap-5 text-xl mx-auto">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/create">
          <li>Add Book</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/profile">{user?.username}</Link>
      </ul>
    </nav>
  );
}
