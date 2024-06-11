import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../../feature/book/bookReducer";

export default function AddBooks() {
  const { books, isError, message, isLoading } = useSelector(
    (state) => state.book
  );
  const [bookData, setBookData] = useState({
    book_name: "",
    author_one: "",
    author_two: "",
    publisher: "",
    language: "",
    paperback: "",
    isbn_10: "",
    about_book: "",
    about_author: "",
    price: "",
    book_cover: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBooks(bookData));
  };

  document.title = "Book | Add";
  return (
    <div className="bg-gray-300 p-5 max-w-2xl mx-auto my-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center uppercase my-7 ">
        Add books
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Book name"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  book_name: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Author one name"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  author_one: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Author two name"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  author_two: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Publisher"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  publisher: e.target.value,
                })
              }
              required
            />

            <input
              type="text"
              placeholder="Book Price"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  price: e.target.value,
                })
              }
              required
            />
            <textarea
              placeholder="About Book"
              className="bg-slate-100 p-3 rounded-lg"
              cols="30"
              rows="5"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  about_book: e.target.value,
                })
              }
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Book language"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  language: e.target.value,
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Book isbn_10"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  isbn_10: e.target.value,
                })
              }
              required
            />
            <input
              type="number"
              placeholder="Book Pages"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  paperback: e.target.value,
                })
              }
              required
            />
            <input
              type="file"
              placeholder="Book Image"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  book_cover: e.target.files[0],
                })
              }
            />

            <textarea
              placeholder="About Author"
              className="bg-slate-100 p-3 rounded-lg"
              cols="30"
              rows="5"
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  about_author: e.target.value,
                })
              }
              required
            ></textarea>
          </div>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-black text-white text-xl mb-5 p-3 font-medium rounded-lg uppercase hover:opacity-50 disabled:opacity-50 duration-500"
        >
          {isLoading ? "Loading" : "Add Book"}
        </button>
      </form>
    </div>
  );
}
