import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import GenericText from "@/shared/ui/genericText";

interface Props {
  icon?: string;
  title?: string;
  price?: string;
}
const ServiceItem = ({ icon, price, title }: Props) => {
  return (
    <div className="flex items-center gap-[10px] w-full">
      <div className="flex items-center gap-[10px]">
        <HamburgerIcon />
        <img src={icon || ""} alt={title} />
      </div>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-9">
          <GenericText size="xlg" fontWeight="semiBold" color="text-5">{title || ""}</GenericText>
        </div>
        <div className="col-span-3">
          <GenericText size="xlg" fontWeight="semiBold" color="text-5" textAlign="right" >{price || ""} Tk</GenericText>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
