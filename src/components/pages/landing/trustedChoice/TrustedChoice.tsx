import Container from "@/components/common/container";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";

const TrustedChoice = () => {
  return (
    <section className="lg:mt-[-115px] relative">
      <Container width="md" >
        <Card padding="xlg">
          <div className="grid grid-cols-12">
            <div className="col-span-4 flex flex-col border-r-[1.5px] border-r-customcolor-350 gap-[8px]">
              <GenericText textAlign="center" size="12xl" fontWeight="semiBold" color="text-5">60+</GenericText>
              <GenericText textAlign="center" size="2xl" fontWeight="regular" color="text-4">Packages available</GenericText>
            </div>
            <div className="col-span-4 flex flex-col items-center gap-[8px]">
              <GenericText textAlign="center" size="12xl" fontWeight="semiBold" color="text-5">50+</GenericText>
              <GenericText textAlign="center" size="2xl" fontWeight="regular" color="text-4">Students Joined</GenericText>
            </div>
            <div className="col-span-4 flex flex-col border-l-[1.5px] border-l-customcolor-350 gap-[8px]">
              <GenericText textAlign="center" size="12xl" fontWeight="semiBold" color="text-5">50+</GenericText>
              <GenericText textAlign="center" size="2xl" fontWeight="regular" color="text-4">Expert Facilitators</GenericText>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default TrustedChoice;
