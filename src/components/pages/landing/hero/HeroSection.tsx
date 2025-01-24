import PlayIcon from "@/assets/icons/playIcon";
import HERO_IMAGE from "@/assets/images/hero_image.png";
import Container from "@/components/common/container";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
import { Link } from "react-router-dom";
const HeroSection = () => {
  // pt-[50px] lg:pt-[133px] pb-[50px] lg:pb-[172px]
  return (
    <div
      className="
    bg-customcolor-750 pt-[50px] lg:pt-[80px] 2xl:pt-[133px] lg:pb-[0px]"
    >
      <Container width="md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[87px] ">
          <div className="col-span-full lg:col-span-7 2xl:col-span-6 lg:pr-[15px] lg:pb-[80px]">
            <div>
              <GenericText color="text-1" elementType="h1" size="13xl" fontWeight="semiBold">
                Complete your <span className="">IELTS</span> preparation at home.
              </GenericText>
            </div>
            <div className="mt-[14px]">
              <GenericText size="2xl" fontWeight="regular" color="text-2" lineHeight="2xl">
                Get prepared to ace the competitive exams. It’s just so easy, you choose your path
                to score your destined one.
              </GenericText>
            </div>
            <div className="mt-[36px] flex flex-col sm:flex-row sm:items-center gap-[32px]">
              <div>
                <Button variant="white" size="size-7" customClass="rounded-[14px]">
                  Start Free Pack
                </Button>
              </div>
              <div className="flex items-center gap-[20px]">
                <Button type="text" customClass="pr-0 pl-0">
                  <PlayIcon className="w-[45px] lg:w-[52px] h-[45px] lg:h-[52px]" />
                </Button>
                <GenericText
                  color="text-2"
                  size="lg"
                  fontWeight="semiBold"
                  textDecoration="underline"
                >
                  <Link to={"#"}>See how it’s work</Link>
                </GenericText>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 2xl:col-span-6 flex items-end lg:items-center">
            <div className="flex justify-center w-[80%] lg:w-[90%] xl:w-[100%] mx-auto">
              <img src={HERO_IMAGE} alt="Hero image" />
            </div>
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default HeroSection;
