import GenericText from "../genericText";

interface AvatarProps {
  name?: string;
  url?: string;
}
const Avatar = ({ name, url }: AvatarProps) => {
  return (
    <div className="">
      <div className=" flex items-center gap-[12px]">
        <div className="w-[40px]">
          <img src={url} alt={name} />
        </div>
        <div>
          <GenericText color="text-3" size="lg" fontWeight="regular">{name || ""}</GenericText>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
