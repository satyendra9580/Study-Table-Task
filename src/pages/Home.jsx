
import HeroSection from "../components/HeroSection";
import PracticeFeature from "../components/PracticeFeature";
import AssessmentFeature from "../components/AssessmentFeature";
import ManagementFeature from "../components/ManagementFeature";
import CTASection from "../components/CTASection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "STUDYtable - Your AI Tutor for JEE, NEET & Boards";
  }, []);

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PracticeFeature />
      <AssessmentFeature />
      <ManagementFeature />
      <CTASection />
    </main>
  );
};

export default Home;
