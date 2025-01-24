import { LadingFooter } from "@/components/common/LandingFooter";
import Header from "@/components/common/header";
import HeroSection from "@/components/pages/landing/hero";
import TrustedChoice from "@/components/pages/landing/trustedChoice";

const Landing = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSection/>
        <TrustedChoice/>
       
      </main>
      <LadingFooter />
    </div>
  );
};

export default Landing;
