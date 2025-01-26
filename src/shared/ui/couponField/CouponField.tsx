import Button from "../button";
import GenericText from "../genericText";

const CouponField = () => {
  return (
    <div>
      <div className="relative h-[40px] lg:h-[48px]">
        <input className="h-[100%] border border-[#E5E5F0] w-full rounded-[4px] absolute left-0 top-0" />
        <Button
          size="size-1"
          customClass="absolute right-[3px] lg:right-[6px] top-[50%] transform -translate-y-[50%] h-[36px]"
        >
          Apply
        </Button>
      </div>
      <GenericText size="xsm" fontWeight="regular" color="text-7" className="mt-[4px]">100% Discount coupon applied successfully</GenericText>
    </div>
  );
};

export default CouponField;
