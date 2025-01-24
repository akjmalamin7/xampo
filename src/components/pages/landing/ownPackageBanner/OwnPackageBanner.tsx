import IMG from "@/assets/images/ownPackageBanner.png";
import Container from "@/components/common/container";
import LandingSectionTitle from "@/components/common/landingSectionTitle";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";
const OwnPackageBanner = () => {
  return (
    <section className="bg-customcolor-100 py-[40px] lg:py-[70px] xl:py-[100px]">
      <Container width="md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-[30px] lg:gap-x-[40px]">
          <div className="col-span-5 flex flex-col justify-center">
            <div className="mb-[18px]">
              <LandingSectionTitle color="text-8">Create your own package</LandingSectionTitle>
            </div>
            <GenericText size="2xl" color="text-4">
              If you wish to purchase a combo package, you can choose your own selections from this
              page and purchase it.
            </GenericText>
            <div className="mt-[20px] xl:mt-[32px]">
              <Button size="size-7" customClass="rounded-[14px]">
                Create Package
              </Button>
            </div>
          </div>
          <div className="col-span-7">
            <div className="flex justify-center">
              <img src={IMG} alt="own package banner" className="w-100" loading="lazy" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OwnPackageBanner;
