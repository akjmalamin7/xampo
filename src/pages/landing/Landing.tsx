import Header from "@/components/common/header";
import HeroSection from "@/components/pages/landing/hero";
import { LadingFooter } from "@/components/pages/landing/LandingFooter";
import OwnPackageBanner from "@/components/pages/landing/ownPackageBanner";
import PopularCourses from "@/components/pages/landing/popularCourses";
import TrustedChoice from "@/components/pages/landing/trustedChoice";
import WeProvide from "@/components/pages/landing/weProvide";

const Landing = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSection />
        <TrustedChoice />
        <PopularCourses />
        <WeProvide />
        <OwnPackageBanner />
      </main>
      <LadingFooter />
    </div>
  );
};

export default Landing;
