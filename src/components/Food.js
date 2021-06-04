import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Fake from "./Fake";
import { selectRecipeName } from "../features/recipeSlice";
import Results from "./Results";
import axios from "axios";

const Food = () => {
  const [recipeData, setRecipeData] = useState([]);
  const recipe = useSelector(selectRecipeName);

  useEffect(() => {
    const fetchData = async () => {
      if (recipe) {
        await axios
          .get(
            `https://api.edamam.com/search?q=${recipe?.name}&app_id=854bcd24&app_key=1597e51677abdc5918192c1ed32de08a`
          )
          .then((responce) => responce.data)
          .then((data) => setRecipeData(data))
          .catch((err) => alert(err.message));
      }
    };
    fetchData();
  }, [recipe?.name, recipe]);

  return (
    <div className="sm:w-3/4 sm:ml-auto sm:mr-auto mt-4">
      <div>
        {recipeData && (
          <div>
            <h1 className="text-yellow-400 text-center text-2xl font-serif font-semibold">
              {recipe?.name}
            </h1>
            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 px-2 py-1">
              {recipeData.hits?.map((doc, index) => (
                <Results
                  key={index}
                  recipeName={recipe?.name}
                  source={doc.recipe.source}
                  label={doc.recipe.label}
                  url={doc.recipe.url}
                  src={doc.recipe.image}
                />
              ))}
            </div>
          </div>
        )}
        <div>
          <Fake />
        </div>
      </div>
    </div>
  );
};

export default Food;
