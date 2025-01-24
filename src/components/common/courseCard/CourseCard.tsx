import BookMarkIcon from "@/assets/icons/bookMarkIcon";
import ClockIcon from "@/assets/icons/clockIcon";
import HandWriteIcon from "@/assets/icons/handWriteIcon";
import MessageIcon from "@/assets/icons/messageIcon";
import StarIcon from "@/assets/icons/starIcon";
import IMG from "@/assets/images/course.png";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";
interface CourseCardProps{
  column?:string;
}
const CourseCard = ({column}:CourseCardProps) => {
  return (
    <Card className={`px-[18px] py-[16px] ${column}`}>
      {/* @____# image #______@ */}
      <div className="w-100 relative">
        <img src={IMG} alt="Course image" className="w-full" />
        <Button type="text" customClass="pl-0 pr-0 absolute right-[12px] top-[12px] bg-white p-[4px] md:p-[5px] xl:p-[8px]">
          <BookMarkIcon/>
        </Button>
      </div>
      {/* @____# course information #______@ */}
      <div className="w-100 mt-[12px] xl:mt-[33px]  pb-[10px]">
        {/* @____# rating #______@ */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-[2px] ">
            <StarIcon className="w-[14px] md:w-[18px]" />
            <StarIcon className="w-[14px] md:w-[18px]" />
            <StarIcon className="w-[14px] md:w-[18px]" />
            <StarIcon className="w-[14px] md:w-[18px]" />
            <StarIcon className="w-[14px] md:w-[18px]" />
            <GenericText elementType="span" className="ml-[3px] text-[11px] md:text-[12px]">
              5.00 (3)
            </GenericText>
          </div>
          <div className="bg-customcolor-1150 rounded-[30px] flex items-center px-[10px] py-[0px] gap-x-[3px]">
            <ClockIcon className="w-[12px] xs:w-[14px]" color="primary" />
            <GenericText fontWeight="regular" color="text-6" className="text-[11px] md:text-[12px] lg:text-[14px]">
              7 Days
            </GenericText>
          </div>
        </div>
        {/* @____# title #______@ */}
        <div className="flex flex-col gap-y-[8px] xl:gap-y-[14px] xs:mt-[10px] xl:mt-[22px]">
          <GenericText size="2xl" fontWeight="semiBold" color="text-5">
            Writing (General)
          </GenericText>
          <div className="flex items-center gap-x-[14px]">
            <HandWriteIcon />
            <GenericText size="xsm" fontWeight="regular" color="text-4">
              1X Writing
            </GenericText>
          </div>
          <div className="flex items-center gap-x-[14px]">
            <MessageIcon />
            <GenericText size="xsm" fontWeight="regular" color="text-4">
              Review
            </GenericText>
          </div>
        </div>
        {/* @____# add to cart and price #______@ */}
        <div className="border-t border-t-customcolor-400 mt-[12px] xl:mt-[23px] pt-[12px] xl:pt-[18px] flex flex-col-reverse xs:flex-row xs:items-center xs:justify-between">
          <Button size="size-6">Add to cart</Button>
          <div className="flex gap-x-[10px] mb-[8px] xs:mb-0">
            <GenericText size="xlg" color="text-6" fontWeight="semiBold" textDecoration="line-through" >Tk. 400</GenericText>
            <GenericText size="xlg" fontWeight="semiBold" color="text-5">Tk. 00</GenericText>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
