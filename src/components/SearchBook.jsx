import { useState } from "react";
import { searchBook } from "../feature/book/bookReducer";

export default function SearchBook({ dispatch }) {
  const [search, setSearch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBook(search));
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mx-auto mt-10">
      <input
        type="text"
        placeholder="Search book"
        onChange={(e) => setSearch(e.target.value)}
        className="border border-black rounded-lg p-2 max-w-lg"
      />
      <button
        type="submit"
        className="bg-black text-white text-xl p-2 font-medium rounded-lg uppercase hover:opacity-50 disabled:opacity-50 duration-500"
      >
        Search
      </button>
    </form>
  );
}
