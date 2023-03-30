import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <HeroBanner />
      <SearchBar />
      <Exercises />
    </div>
  );
}

export default Home;
