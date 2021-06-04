import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../features/recipeSlice";
import chille from "../images/chille.jpg";
const Search = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const getUserInput = (e) => {
    e.preventDefault();
    dispatch(
      getRecipeName({
        name: inputRef.current.value,
      })
    );
    inputRef.current.value = null;
  };

  return (
    <div className="sm:h-[50vh]">
      <div className="sm:w-3/4 sm:ml-auto sm:mr-auto py-4">
        <div className="flex justify-between items-center">
          <div className="px-2 py-1">
            <h1 className="text-yellow-400 mb-3 text-lg sm:text-3xl font-semibold font-serif tracking-wider text-center sm:text-left">
              Everything tastes good when you're hungry..
            </h1>
            <img
              src={chille}
              alt=""
              className="sm:hidden border-t-2 border-pink-500"
            />
            <h1 className="text-yellow-400 sm:mt-5 font-serif mt-3 text-xl text-center sm:text-left font-semibold tracking-wider">
              Search you'r favourite recipes
            </h1>

            <div className="mt-3 flex justify-center max-w-xl">
              <form className="flex flex-col w-full" onSubmit={getUserInput}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Chiken biriyani.."
                  className="w-full py-2 focus:outline-none bg-transparent p-1 text-yellow-400 placeholder-yellow-500 border-b-2 border-yellow-400"
                />
                <div className="w-full flex justify-center sm:justify-start mt-3">
                  <button className="px-7 sm:px-10 py-1 font-serif focus:outline-none text-yellow-400 sm:mt-5 hover:bg-yellow-300 hover:text-black font-semibold border border-yellow-400">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-10">
            <img
              src={chille}
              alt=""
              className="hidden sm:block h-64 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
