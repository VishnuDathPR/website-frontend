import Navbar  from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Vision  from "../components/Vision";
import Connect from "../components/Connect";
import Transcend from "../components/Transcend";
import Work from "../components/Work";
import CaseStudy from "../components/CaseStudy";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Vision />
      <Connect/>
      <Transcend/>
      <Work/>
      <CaseStudy/>
      <Contact/>
    </>
  );
}
