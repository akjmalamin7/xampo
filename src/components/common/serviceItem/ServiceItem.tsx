import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";

interface Props {
  icon?: string;
  title?: string;
  price?: string;
}

const ServiceItem = ({ icon, price, title }: Props) => {
  return (
    <div className="flex items-center gap-[20px] w-full border border-[#e1e1e180 px-[12px] py-[8px]  xl:px-[15px] xl:py-[15px]
rounded-[8px]">
      <div className="flex items-center gap-[10px] min-w-[64px]">
        <Button type="text" customClass="pl-0 pr-0">
          <HamburgerIcon />
        </Button>
        <img src={icon || ""} alt={title} className="object-cover"/>
      </div>
      {/* Content Section */}
      <div className="flex justify-between w-full">
        {/* Title */}
        <div className="flex-1">
          <GenericText size="xlg" fontWeight="semiBold" color="text-5">
            {title || ""}
          </GenericText>
        </div>
        {/* Price */}
        <div className="text-right">
          <GenericText size="xlg" fontWeight="semiBold" color="text-5">
            {price || ""} Tk
          </GenericText>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
