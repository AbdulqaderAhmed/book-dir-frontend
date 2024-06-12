import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../feature/book/bookReducer.js";
import { Link } from "react-router-dom";
import SearchBook from "../../components/SearchBook.jsx";

export default function Home() {
  // const { user } = useSelector((state) => state.auth);
  const { books, isError, message } = useSelector((state) => state.book);
  // const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  document.title = "Book";

  useEffect(() => {
    if (!isError && !message) {
      dispatch(getAllBooks());
    }
  }, [isError, message, dispatch]);

  return (
    <div className="flex flex-col min-h-full">
      <SearchBook dispatch={dispatch} />
      <div className="grid grid-flow-row md:grid-cols-4 lg:grid-cols-5 m-10 gap-1 md:mx-5 lg:mx-auto mx-auto">
        {/* {books && (
          <select
            name="page"
            onChange={(e) => setPage(e.target.value)}
            className="border-2 border-solid border-black"
          >
            <option value="0">0</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        )} */}

        {books && books.length ? (
          books.map((item, index) => {
            const imgUrl = `http://localhost:8000/public/uploads/${item.book_cover}`;
            return (
              <div
                className="flex flex-col gap-2 text-center border border-slate-400 p-5 hover:shadow-xl"
                key={index}
              >
                <img
                  className="mx-auto"
                  src={imgUrl}
                  alt={item.book_name}
                  width={200}
                />
                <h2 className="font-bold">{item.book_name.slice(0, 30)}</h2>
                <h3 className="text-yellow-700">${item.price}</h3>
                <div className="flex justify-between">
                  <Link
                    to={`/detail/${item._id}`}
                    className="text-blue-700 italic"
                  >
                    Read more...
                  </Link>

                  <Link
                    to={`/edit/${item._id}`}
                    className="text-blue-700 italic"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No books listed...</h2>
        )}
      </div>
    </div>
  );
}
