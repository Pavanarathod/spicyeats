import { useEffect, useState } from "react";
import axios from "axios";
const Fake = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const items = ["chicken", "egg", "paneer", "fish"];
      await axios
        .get(
          `https://api.edamam.com/search?q=${Math.floor(
            Math.random() * items.length
          )}&app_id=854bcd24&app_key=1597e51677abdc5918192c1ed32de08a`
        )
        .then((res) => res.data)
        .then((data) => setTrending(data))
        .catch((err) => alert(err.message));
    };
    fetchFood();
  }, []);

  return (
    <div>
      <h1 className="text-yellow-400 mt-2 text-center text-2xl font-serif font-semibold">
        Trending Recipes
      </h1>
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 px-3 py-1">
        {trending.hits?.map((doc, index) => (
          <div key={index} className="">
            <div>
              <img
                src={doc.recipe.image}
                alt=""
                className="h-[350px] object-contain mt-4"
              />
            </div>
            <div>
              <div className="">
                <h1 className="text-yellow-400 text-2xl font-serif font-semibold tracking-wider">
                  {doc.recipe.label}
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-yellow-300 text-base font-sans font-semibold tracking-wider">
                Source: {doc.recipe.source}
              </h1>
            </div>

            <div className="w-full mt-3 flex justify-center sm:justify-start">
              <a
                href={doc.recipe.url}
                target="_blank"
                rel="noreferrer"
                className=" px-4 sm:px-8 py-1 sm:py-2 text-sm bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-300 hover:text-black"
              >
                More details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fake;
