const Results = ({ recipeName, label, source, url, src }) => {
  return (
    <div>
      <div className="mt-5 px-3 py-1">
        <div className="">
          <div>
            <img src={src} alt="" className="h-[350px] object-contain mt-4" />
          </div>
          <div>
            <div className="">
              <h1 className="text-yellow-400 text-2xl font-serif font-semibold tracking-wider">
                {label}
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-yellow-300 text-base font-sans font-semibold tracking-wider">
              Source: {source}
            </h1>
          </div>

          <div className="w-full mt-3 flex justify-center">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className=" px-4 sm:px-8 py-1 sm:py-2 text-sm bg-red-600 text-gray-100 hover:bg-red-700 hover:text-white font-bold"
            >
              More details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
