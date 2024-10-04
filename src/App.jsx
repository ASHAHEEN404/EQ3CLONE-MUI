import Categories from "./components/Categories";
import FeaturesCard from "./components/FeaturesCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <FeaturesCard />
      <Footer />
    </div>
  );
};

export default App;
