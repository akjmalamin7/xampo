import ICON from "@/assets/images/speakerIcon.png";
import Container from "@/components/common/container";
import PageHeader from "@/components/common/pageHeader";
import ServiceItem from "@/components/common/serviceItem";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";
import Input from "@/shared/ui/Input";
import Select from "@/shared/ui/select";
const CreatePackage = () => {
  return (
    <section>
      <Container width="md">
        {/* @_____# Page Header #__________@ */}
        <PageHeader title="Create Packages">
          <Button type="outline" variant="primary" size="size-3">
            <GenericText color="text-6">Active Course </GenericText>
          </Button>
        </PageHeader>
        <Card className="px-[20px] py-[20px] mb-[25px]" radius="sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] lg:gap-[25px]">
            <Input label="Package name" />
            <Select label="Course type" options={[{ name: "Akjm", value: "Al Amin" }]} />
          </div>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[44px]">
          <Card padding="md" radius="sm">
            <div className="mb-[24px]">
              <GenericText size="5xl" fontWeight="bold" color="text-5">List of the sevice</GenericText>
            </div>
            <div className="w-full">
              <ServiceItem icon={ICON} title="Reading" price="300"/>
            </div>
          </Card>
          <Card padding="md" radius="sm"></Card>
        </div>
      </Container>
    </section>
  );
};

export default CreatePackage;
