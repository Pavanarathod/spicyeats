import spicy from "../images/spicy.png";

const Navbar = () => {
  return (
    <div className="bg-black sm:w-3/4 sm:ml-auto sm:mr-auto">
      <div className="flex items-center justify-between">
        <div className="px-2 p-2">
          <img src={spicy} alt="" className="h-24 object-contain" />
        </div>
        <div className="hidden sm:block"></div>
      </div>
    </div>
  );
};

export default Navbar;
