import PlayIcon from "@/assets/icons/playIcon";
import HERO_IMAGE from "@/assets/images/hero_image.png";
import Container from "@/components/common/container";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="bg-customcolor-750 pt-[50px] lg:pt-[133px] pb-[50px] lg:pb-[172px]">
      <Container>
        <div className="grid grid-cols-12 gap-[87px] ">
          <div className="col-span-full lg:col-span-6 lg:pr-[15px]">
            <div>
              <GenericText elementType="h1" size="13xl" fontWeight="semiBold">
                Complete your <span className="">IELTS</span> preparation at home.
              </GenericText>
            </div>
            <div className="mt-[14px]">
              <GenericText size="2xl" fontWeight="regular" color="text-2" lineHeight="2xl">
                Get prepared to ace the competitive exams. It’s just so easy, you choose your path
                to score your destined one.
              </GenericText>
            </div>
            <div className="mt-[36px] flex items-center gap-[32px]">
              <div>
                <Button variant="white" size="size-7" customClass="rounded-[14px]">
                  Start Free Pack
                </Button>
              </div>
              <div className="flex items-center gap-[20px]">
                <Button type="text" customClass="pr-0 pl-0">
                  <PlayIcon />
                </Button>
                <GenericText size="lg" fontWeight="semiBold" textDecoration="underline">
                  <Link to={"#"}>See how it’s work</Link>
                </GenericText>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-6">
            <div>
              <img src={HERO_IMAGE} alt="Hero image" />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
