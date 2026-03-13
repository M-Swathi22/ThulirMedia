import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutpreview from "../components/Aboutpreview";
import MomentsSection from "../components/MomentsSection";
import PackagesSection from "../components/PackagesSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutpreview />
      <MomentsSection />
      <PackagesSection />
    </>
  );
}

export default Home;