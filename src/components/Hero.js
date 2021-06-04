const Hero = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "88vh",
      }}
    >
      <div className="sm:w-3/4 sm:ml-auto sm:mr-auto py-4">
        <div className="p-3 max-w-sm sm:max-w-2xl sm:mt-8">
          <h1 className="text-5xl sm:text-8xl font-serif font-semibold tracking-wider italic text-yellow-400">
            Cook you'r favourite recipes at home..
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
