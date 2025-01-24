import AssignIcon from "@/assets/icons/assingIcon";
import FullPackagesIcon from "@/assets/icons/fullPackagesIcon";
import PlusIcon from "@/assets/icons/plusIcon";
import Container from "@/components/common/container";
import LandingSectionTitle from "@/components/common/landingSectionTitle";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";

const WeProvide = () => {
  return (
    <div className="py-[40px] xl:py-[90px] bg-[url('/we_provide.png')] bg-cover bg-center bg-no-repeat">
      <Container width="md">
        {/* @______# heading #_______@ */}
        <div className="mb-[30px] lg:mb-[40px] xl:mb-[56px]">
          <LandingSectionTitle color="text-1" textAlign="center">
            Some popular courses
          </LandingSectionTitle>

          {/* @______# services #_______@ */}
          <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-row lg:justify-between flex-col items-center">
            <Card className="flex-1 px-[27px] py-[80px] w-full lg:w-auto">
              <div>
                <FullPackagesIcon  type="round"/>
                <GenericText>Full exam packages</GenericText>
              </div>
            </Card>
            <PlusIcon/>
            <Card className="flex-1 px-[27px] py-[80px] w-full lg:w-auto">
              <div>
                <FullPackagesIcon  type="round"/>
                <GenericText>Full exam packages</GenericText>
              </div>
            </Card>
            <PlusIcon/>
            <Card className="flex-1 px-[27px] py-[80px] w-full lg:w-auto">
              <div>
                <FullPackagesIcon  type="round"/>
                <GenericText>Full exam packages</GenericText>
              </div>
            </Card>
            <AssignIcon/>
            <Card className="flex-1 px-[27px] py-[80px] w-full lg:w-auto">
              <div>
                <FullPackagesIcon  type="round"/>
                <GenericText size="2xl" fontWeight="semiBold" color="text-5">Full exam packages</GenericText>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WeProvide;
