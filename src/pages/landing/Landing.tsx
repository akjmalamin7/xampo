import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import CartIcon from "@/assets/icons/cartIcon";
import GoogleIcon from "@/assets/icons/googleIcon";
import LineArrow from "@/assets/icons/lineArrow";
import { LadingFooter } from "@/components/common/LandingFooter";
import Header from "@/components/common/header";
import HeroSection from "@/components/pages/landing/hero";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";

const Landing = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSection/>
        <GenericText fontWeight="bold" elementType="p" size="2xl" color="text-6">
          Generic Text
        </GenericText>
        <p className="text-customcolor-300">dfsfasdfasf</p>
        <ArrowIcon size="lg" rotate="top" />
        <CartIcon />
        <LineArrow />
        <Button
          children={
            <>
              <GoogleIcon /> Google
            </>
          }
          variant="tertiary"
          type="outline"
          width="auto"
          size="size-1"
        />
      </main>
      <LadingFooter />
    </div>
  );
};

export default Landing;
