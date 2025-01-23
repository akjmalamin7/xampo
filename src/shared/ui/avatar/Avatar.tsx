import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import GenericText from "../genericText";

interface AvatarProps {
  name?: string;
  url?: string;
}
const Avatar = ({ name, url }: AvatarProps) => {
  return (
    <div className="">
      <div className="flex items-center gap-[12px] lg:cursor-pointer">
        <div className="w-[auto]">
          <img src={url} alt={name} />
        </div>
        <div className="flex items-center gap-[6px]">
          <GenericText color="text-3" size="lg" fontWeight="regular">{name || ""}</GenericText>
          <ArrowIcon rotate="bottom" className="mt-[2px]"/>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
