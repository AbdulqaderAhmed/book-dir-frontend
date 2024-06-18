export default function Pagination({ page, total, limit, setPage }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center items-center mb-20 z-50">
      {totalPages > 0 &&
        [...Array(totalPages)].map((val, index) => {
          return (
            <button
              key={index}
              onClick={() => setPage(index++)}
              className={`flex justify-center items-center outline-none border-none text-base font-medium rounded-md w-7 h-7 mx-1 bg-gray-200 hover:bg-gray-300 shadow-md cursor-pointer ${
                page === index + 1 && "active:bg-black active:text-white"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
    </div>
  );
}
