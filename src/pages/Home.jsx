import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutpreview from "../components/Aboutpreview";
import MomentsSection from "../components/MomentsSection";
import PackagesSection from "../components/PackagesSection";
import ComfortSection from "../components/ComfortSection";
import ServiceSection from "../components/ServiceSection";
import OurApproachSection from "../components/OurApproachSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

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
      <OurApproachSection />
      <CTASection />
    </>
  );
}

export default Home;