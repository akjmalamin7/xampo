import Card from "@/shared/ui/card";
import Input from "@/shared/ui/Input";
import Select from "@/shared/ui/select";

const PackageNameType = () => {
  return (
    <Card className="px-[20px] py-[20px] mb-[25px]" radius="sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] lg:gap-[25px]">
        <Input label="Package name" />
        <Select label="Course type" options={[{ name: "Akjm", value: "Al Amin" }]} />
      </div>
    </Card>
  );
};

export default PackageNameType;
