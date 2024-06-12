import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, editBook, viewBook } from "../../feature/book/bookReducer";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBook() {
  const { books, isError, message, isLoading } = useSelector(
    (state) => state.book
  );
  const [bookData, setBookData] = useState({
    book_name: books?.book_name,
    author_one: books?.author_one,
    author_two: books?.author_two,
    publisher: books?.publisher,
    language: books?.language,
    paperback: books?.paperback,
    isbn_10: books?.isbn_10,
    about_book: books?.about_book,
    about_author: books?.about_author,
    price: books?.price,
    book_cover: null,
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editBook({ id, bookData }));
  };

  const handelDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));

    setTimeout(() => {
      if (!isError || !message) {
        navigate("/");
      }
    }, 100);
  };

  document.title = "Book | Update Info";

  useEffect(() => {
    if (isError && message) {
      console.log(message);
    }
    dispatch(viewBook(id));
  }, [id, dispatch, message, isError]);
  return (
    <div className="bg-gray-300 p-5 max-w-2xl mx-auto my-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center uppercase my-7 ">
        Edit book
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Book name"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.book_name}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  book_name: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Author one name"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.author_one}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  author_one: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Author two name"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.author_two}
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
              defaultValue={books?.publisher}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  publisher: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Book Price"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.price}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  price: e.target.value,
                })
              }
            />
            <textarea
              placeholder="About Book"
              className="bg-slate-100 p-3 rounded-lg"
              cols="30"
              rows="5"
              defaultValue={books?.about_book}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  about_book: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Book language"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.language}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  language: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Book isbn_10"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.isbn_10}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  isbn_10: e.target.value,
                })
              }
            />
            <input
              type="number"
              placeholder="Book Pages"
              className="bg-slate-100 p-3 rounded-lg"
              defaultValue={books?.paperback}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  paperback: e.target.value,
                })
              }
            />
            <div className="flex flex-col gap-5">
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

              <img
                src={
                  books?.book_cover
                    ? `http://localhost:8000/public/uploads/${books?.book_cover}`
                    : books?.book_cover
                }
                alt={books?.book_name}
                width={100}
                className="mx-auto"
              />
            </div>

            <textarea
              placeholder="About Author"
              className="bg-slate-100 p-3 rounded-lg"
              cols="30"
              rows="5"
              defaultValue={books?.about_author}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  about_author: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>

        <div className="flex justify-around">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-black text-white text-xl mb-5 p-3 font-medium rounded-lg uppercase hover:opacity-50 disabled:opacity-50 duration-500"
          >
            {isLoading ? "Loading" : "Edit Book"}
          </button>

          <button
            onClick={handelDelete}
            disabled={isLoading}
            type="button"
            className="bg-red-400 text-white text-xl mb-5 p-3 font-medium rounded-lg uppercase hover:opacity-50 disabled:opacity-50 duration-500"
          >
            {isLoading ? "Loading" : "Delete Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
