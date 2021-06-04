import Food from "../components/Food";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Homepage = () => {
  return (
    <div className="w-full bg-black">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Food />
      </div>
    </div>
  );
};

export default Homepage;
