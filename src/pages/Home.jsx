import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutpreview from "../components/Aboutpreview";
import MomentsSection from "../components/MomentsSection";
import PackagesSection from "../components/PackagesSection";
import ComfortSection from "../components/ComfortSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutpreview />
      <MomentsSection />
      <PackagesSection />
      <ComfortSection />
    </>
  );
}

export default Home;