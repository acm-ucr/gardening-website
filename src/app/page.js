import Directions from "@/components/home/Directions";
import Hero from "@/components/home/Hero";
import Join from "@/components/home/Join";
import Tips from "@/components/home/Tips";
import Values from "@/components/home/Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <Values />
      <Join />
      <Tips />
      <Directions />
    </div>
  );
};

export default Home;
