import IMG from "@/assets/images/emptyFormate.png"
import GenericText from "@/shared/ui/genericText"
const EmptyFormate = () => {
  return (
    <div className="my-[40px]">
      <div className="flex justify-center">
        <img src={IMG} alt="empty formate" />
      </div>
      <div className="flex flex-col items-center gap-[10px] mt-[25px] lg:mt-[38px]">
        <GenericText size="xlg" fontWeight="bold" color="text-3">Your format is empty</GenericText>
        <GenericText size="lg" color="text-3" fontWeight="regular">So far you have not drag any courses</GenericText>
      </div>
    </div>
  )
}

export default EmptyFormate