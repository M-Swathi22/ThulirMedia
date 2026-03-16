import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutpreview from "../components/Aboutpreview";
import MomentsSection from "../components/MomentsSection";
import PackagesSection from "../components/PackagesSection";
import ComfortSection from "../components/ComfortSection";
import ServiceSection from "../components/ServiceSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutpreview />
      <MomentsSection />
      <PackagesSection />
      <ComfortSection />
      <ServiceSection />
    
    </>
  );
}

export default Home;