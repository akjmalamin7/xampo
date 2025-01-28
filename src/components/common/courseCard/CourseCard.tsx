import BookMarkIcon from "@/assets/icons/bookMarkIcon";
import ClockIcon from "@/assets/icons/clockIcon";
import HandWriteIcon from "@/assets/icons/handWriteIcon";
import StarIcon from "@/assets/icons/starIcon";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import GenericText from "@/shared/ui/genericText";
import { PopularCoursesModels } from "./popularCourses.models";
interface CourseCardProps{
  isCountDown?:boolean;
  courses:PopularCoursesModels
}
const CourseCard = ({isCountDown=true,courses}:CourseCardProps) => {
  return (
    <Card className={`px-[18px] py-[16px] `}>
      {/* @____# image #______@ */}
      <div className="w-100 relative">
        <img src={courses?.photo} alt="Course image" className="w-full" />
        <Button type="text" customClass="pl-0 pr-0 absolute right-[12px] top-[12px] bg-white p-[4px] md:p-[5px] xl:p-[8px]">
          <BookMarkIcon/>
        </Button>
        {/*  @_____# offer #____@*/}
        {
          isCountDown && <div className="absolute flex items-center gap-[3px] bg-customcolor-100 border border-[#0052cc99] px-[13px] rounded-[4px] left-[50%] transform -translate-x-1/2 bottom-[10px]">
            <GenericText size="xsm" fontWeight="semiBold" color="text-4">30D</GenericText>
            :
            <GenericText size="xsm" fontWeight="semiBold" color="text-4">24H</GenericText>
            :
            <GenericText size="xsm" fontWeight="semiBold" color="text-4">58M</GenericText>
            :
            <GenericText size="xsm" fontWeight="semiBold" color="text-4">56S</GenericText>
          </div>
        }
      </div>
      {/* @____# course information #______@ */}
      <div className="w-100 mt-[12px] xl:mt-[33px]  pb-[10px]">
        {/* @____# rating #______@ */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-[2px] ">
            {
              Array(5).fill(0).map((_,i)=>  <StarIcon key={i} className="w-[14px] md:w-[16px]" color={i < parseInt(courses?.aveRatings || "0") ? "yellow" : "gray"}  />)
            }
            <GenericText elementType="span" className="ml-[3px] text-[11px] md:text-[12px]">
            {courses?.aveRatings || "0.0"} ({courses?.ratingNumber || "0"})
            </GenericText>
          </div>
          <div className="bg-customcolor-1150 rounded-[30px] flex items-center px-[10px] py-[0px] gap-x-[3px]">
            <ClockIcon className="w-[12px] xs:w-[14px]" color="primary" />
            <GenericText fontWeight="regular" color="text-6" className="text-[11px] md:text-[12px] lg:text-[14px]">
              {courses?.validity}
            </GenericText>
          </div>
        </div>
        {/* @____# title #______@ */}
        <div className="flex flex-col gap-y-[8px] xl:gap-y-[14px] xs:mt-[10px] xl:mt-[22px]">
          <GenericText size="2xl" fontWeight="semiBold" color="text-5">
            {courses?.packageName || ""}
          </GenericText>
         
          <div className="flex items-center gap-x-[14px]">
            <HandWriteIcon />
            <GenericText size="xsm" fontWeight="regular" color="text-4">
             {courses?.writingQ} Writing
            </GenericText>
          </div>
          
        </div>
        {/* @____# add to cart and price #______@ */}
        <div className="border-t border-t-customcolor-400 mt-[12px] xl:mt-[23px] pt-[12px] xl:pt-[18px] flex flex-col-reverse xs:flex-row xs:items-center xs:justify-between">
          <Button size="size-6">Add to cart</Button>
          <div className="flex gap-x-[10px] mb-[8px] xs:mb-0">
          {parseFloat(courses?.discount) > 0 && (
              <GenericText
                size="xlg"
                color="text-6"
                fontWeight="semiBold"
                textDecoration="line-through"
              >
                Tk. {courses?.discount}
              </GenericText>
            )}
            
            <GenericText size="xlg" fontWeight="semiBold" color="text-5">Tk. {courses?.price}</GenericText>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
