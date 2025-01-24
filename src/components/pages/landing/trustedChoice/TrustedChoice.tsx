import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import CheckPerformanceIcon from "@/assets/icons/checkPerformanceIcon";
import FacilitatorReviewIcon from "@/assets/icons/facilitaorReviewIcon";
import FullPackagesIcon from "@/assets/icons/fullPackagesIcon/FullPackagesIcon";
import InstantResultIcon from "@/assets/icons/instantResultIcon";
import Container from "@/components/common/container";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";
// bg-customcolor-850
const TrustedChoice = () => {
  return (
    <section className="relative pt-[50px] md:pt-[70px] lg:pt-[0px]  xl:mt-[-115px] relative  pb-[50px] md:pb-[70px] lg:pb-[90px] xl:pb-[147px] ">
      <Container width="md">
        {/* milestones achieved */}
        <Card padding="xlg">
          <div className="grid grid-cols-12 gap-x-[16px] gap-y-[40px]">
            <div className="col-span-6 md:col-span-4 flex flex-col md:border-r-[1.5px] border-r-customcolor-350 gap-[8px]">
              <GenericText
                elementType="h2"
                textAlign="center"
                size="12xl"
                fontWeight="semiBold"
                color="text-5"
              >
                60+
              </GenericText>
              <GenericText textAlign="center" size="2xl" fontWeight="regular" color="text-4">
                Packages available
              </GenericText>
            </div>
            <div className="col-span-6 md:col-span-4 flex flex-col items-center gap-[8px]">
              <GenericText
                elementType="h2"
                textAlign="center"
                size="12xl"
                fontWeight="semiBold"
                color="text-5"
              >
                50+
              </GenericText>
              <GenericText textAlign="center" size="2xl" fontWeight="regular" color="text-4">
                Students Joined
              </GenericText>
            </div>
            <div className="col-span-6 md:col-span-4 flex flex-col md:border-l-[1.5px] border-l-customcolor-350 gap-[8px]">
              <GenericText
                elementType="h2"
                textAlign="center"
                size="12xl"
                fontWeight="semiBold"
                color="text-5"
              >
                50+
              </GenericText>
              <GenericText textAlign="center" size="2xl" fontWeight="regular" color="text-4">
                Expert Facilitators
              </GenericText>
            </div>
          </div>
        </Card>
        {/* special features */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] mt-[40px] lg:mt-[70px] xl:mt-[96px]">
          <Card
            className="col-span-1 md:col-span-6 lg:col-span-8 px-[30px] xl:px-[78px] py-[30px] lx:py-[68px]"
            bgColor="primary"
          >
            <div className="">
              <GenericText elementType="h3" size="11xl" fontWeight="semiBold" color="text-1">
                Our spacial features for students
              </GenericText>
            </div>
            <div className="mt-[20px] lg:mt-[32px]">
              <Button variant="white" size="size-7" customClass="rounded-[14px]">
                See Features
              </Button>
            </div>
          </Card>

          <Card className="col-span-1 md:col-span-6 lg:col-span-4 px-[30px] xl:px-[48px] py-[30px] xl:-py-[48px]">
            <div>
              <div>
                <FullPackagesIcon className="h-[50px] w-[50px]  xl:h-[100px] xl:w-[109px]" />
              </div>
              <div className="mt-[18px] mt:md-[24px]">
                <GenericText size="5xl" fontWeight="semiBold" color="text-6">
                  Full exam Packages
                </GenericText>
                <GenericText
                  size="2xl"
                  fontWeight="regular"
                  color="text-4"
                  className="mt-[12px] xl:mt-[18px]"
                >
                  IELTS general & academic Speaking, reading, writing full mock module
                </GenericText>
              </div>
              <div className="mt-[8px] xl:mt-[8px] flex justify-end">
                <Button type="text" customClass="pl-0 pr-0">
                  <GenericText size="2xl" color="text-5" fontWeight="semiBold">
                    {" "}
                    More
                  </GenericText>{" "}
                  <ArrowIcon size="line" />
                </Button>
              </div>
            </div>
          </Card>
          <Card className="col-span-1 md:col-span-6 lg:col-span-4 px-[30px] xl:px-[48px] py-[30px] xl:-py-[48px]">
            <div>
              <div>
                <InstantResultIcon className="h-[50px] w-[65px]  xl:h-[99px] xl:w-[97px]" />
              </div>
              <div className="mt-[18px] mt:md-[24px]">
                <GenericText size="5xl" fontWeight="semiBold" color="text-6">
                  Instant Result
                </GenericText>
                <GenericText
                  size="2xl"
                  fontWeight="regular"
                  color="text-4"
                  className="mt-[12px] xl:mt-[18px]"
                >
                  IELTS general & academic Speaking, reading, writing full mock module
                </GenericText>
              </div>
              <div className="mt-[8px] xl:mt-[8px] flex justify-end">
                <Button type="text" customClass="pl-0 pr-0">
                  <GenericText size="2xl" color="text-5" fontWeight="semiBold">
                    {" "}
                    More
                  </GenericText>{" "}
                  <ArrowIcon size="line" />
                </Button>
              </div>
            </div>
          </Card>
          <Card className="col-span-1 md:col-span-6 lg:col-span-4 px-[30px] xl:px-[48px] py-[30px] xl:-py-[48px]">
            <div>
              <div>
                <CheckPerformanceIcon className="w-[50px] h-[50px]  xl:h-[100px] xl:w-[90px]" />
              </div>
              <div className="mt-[18px] mt:md-[24px]">
                <GenericText size="5xl" fontWeight="semiBold" color="text-6">
                  Check Performance
                </GenericText>
                <GenericText
                  size="2xl"
                  fontWeight="regular"
                  color="text-4"
                  className="mt-[12px] xl:mt-[18px]"
                >
                  IELTS general & academic Speaking, reading, writing full mock module
                </GenericText>
              </div>
              <div className="mt-[8px] xl:mt-[8px] flex justify-end">
                <Button type="text" customClass="pl-0 pr-0">
                  <GenericText size="2xl" color="text-5" fontWeight="semiBold">
                    {" "}
                    More
                  </GenericText>{" "}
                  <ArrowIcon size="line" />
                </Button>
              </div>
            </div>
          </Card>
          <Card className="col-span-1 md:col-span-6 lg:col-span-4 px-[30px] xl:px-[48px] py-[30px] xl:-py-[48px]">
            <div>
              <div>
                <FacilitatorReviewIcon className="w-[50px] h-[50px] xl:h-[95px] xl:w-[99px]" />
              </div>
              <div className="mt-[18px] mt:md-[24px]">
                <GenericText size="5xl" fontWeight="semiBold" color="text-6">
                  Facilitator Review
                </GenericText>
                <GenericText
                  size="2xl"
                  fontWeight="regular"
                  color="text-4"
                  className="mt-[12px] xl:mt-[18px]"
                >
                  IELTS general & academic Speaking, reading, writing full mock module
                </GenericText>
              </div>
              <div className="mt-[8px] xl:mt-[8px] flex justify-end">
                <Button type="text" customClass="pl-0 pr-0">
                  <GenericText size="2xl" color="text-5" fontWeight="semiBold">
                    More
                  </GenericText>{" "}
                  <ArrowIcon size="line" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default TrustedChoice;
