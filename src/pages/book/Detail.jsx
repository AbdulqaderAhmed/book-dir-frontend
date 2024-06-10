import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewBook } from "../../feature/book/bookReducer";

export default function Detail() {
  const { books, isError, isLoading, message } = useSelector(
    (state) => state.book
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewBook(id));
  }, [id, dispatch]);

  console.log(books);

  return (
    <div className="flex justify-center items-center my-10 ">
      <div className="flex flex-col gap-4 justify-center items-center border max-w-4xl p-5 shadow-xl">
        {books && (
          <>
            <img
              src={`http://localhost:8000/public/uploads/${books.book_cover}`}
              alt={books.book_cover}
              width={300}
            />

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xl font-semibold">{books.book_name}</p>
                <p className="text-blue-600">
                  {books.author_one}{" "}
                  <span className="text-black">(author)</span>
                </p>
              </div>

              <div>
                <p className="text-lg font-bold">Summery</p>
                <p className="font-thin">{books.about_book}</p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <h3 className="font-medium">Publisher : </h3>
                  <p>{books.publisher}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h3 className="font-medium">Language : </h3>
                  <p>{books.language}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h3 className="font-medium">Paperback : </h3>
                  <p>{books.paperback} Pages</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h3 className="font-medium">ISBN-10 : </h3>
                  <p>{books.isbn_10}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h3 className="font-medium">Price : </h3>
                  <p className="text-orange-500">${books.price}</p>
                </div>
              </div>

              <div>
                <p className="text-lg font-bold">About author</p>
                <p className="font-thin">{books.about_author}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
