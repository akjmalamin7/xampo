import AssignIcon from "@/assets/icons/assingIcon";
import BestTricksIcon from "@/assets/icons/bestTricksIcon/BestTricksIcon";
import FullPackagesIcon from "@/assets/icons/fullPackagesIcon";
import HighestScoresIcon from "@/assets/icons/highestScoreIcon";
import PlusIcon from "@/assets/icons/plusIcon";
import TopFacilatorIcon from "@/assets/icons/topFacilatorIcon";
import Container from "@/components/common/container";
import LandingSectionTitle from "@/components/common/landingSectionTitle";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";

const WeProvide = () => {
  return (
    <section className="py-[40px] xl:py-[90px] bg-[url('/we_provide.png')] bg-cover bg-center bg-no-repeat">
      <Container width="md">
        {/* @______# heading #_______@ */}
        <div className="mb-[30px] lg:mb-[40px] xl:mb-[56px]">
          <LandingSectionTitle color="text-1" textAlign="center">
            Some popular courses
          </LandingSectionTitle>
        </div>
        {/* @______# services #_______@ */}
        <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-row lg:justify-between flex-col items-stretch">
          <Card className="flex-1 px-[27px] py-[40px] lg:py-[80px] w-full lg:w-auto">
            <div className="flex flex-col items-center gap-y-[20px]">
              <FullPackagesIcon
                type="round"
                className="w-[50px] h-[50px] xl:w-[91px] xl:h-[87px]"
              />
              <GenericText size="2xl" fontWeight="semiBold" color="text-5">
                Full exam packages
              </GenericText>
            </div>
          </Card>
          <div className="flex justify-center items-center">
            <PlusIcon />
          </div>
          <Card className="flex-1 px-[27px] py-[40px] lg:py-[80px] w-full lg:w-auto">
            <div className="flex flex-col items-center gap-y-[20px]">
              <TopFacilatorIcon className="w-[50px] h-[50px] xl:w-[86px] xl:h-[88px]" />
              <GenericText size="2xl" fontWeight="semiBold" color="text-5">
                Top facilitator
              </GenericText>
            </div>
          </Card>
          <div className="flex justify-center items-center">
            <PlusIcon />
          </div>
          <Card className="flex-1 px-[27px] py-[40px] lg:py-[80px] w-full lg:w-auto">
            <div className="flex flex-col items-center gap-y-[20px]">
              <BestTricksIcon className="w-[50px] h-[50px] xl:w-[91px] xl:h-[88px]" />
              <GenericText size="2xl" fontWeight="semiBold" color="text-5">
                Best tricks for the exam
              </GenericText>
            </div>
          </Card>
          <div className="flex justify-center items-center">
            <AssignIcon />
          </div>
          <Card className="flex-1 px-[27px] py-[40px] lg:py-[80px] w-full lg:w-auto">
            <div className="flex flex-col items-center gap-y-[20px]">
              <HighestScoresIcon className="w-[50px] h-[50px] xl:w-[86px] xl:h-[88px]" />
              <GenericText size="2xl" fontWeight="semiBold" color="text-5">
                scores
              </GenericText>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default WeProvide;
