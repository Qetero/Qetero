import HeroSection from "../Components/Home/HeroSection";
import FeaturedServices from "../Components/Home/Featured";
import ServicesListing from "../Components/Home/ServicesList";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <ServicesListing filter="Nearby" />
      <ServicesListing filter="Recommended" />
      <ServicesListing filter="Top Rated" />
    </>
  );
};

export default Home;
