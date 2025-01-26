import ClockIcon from "@/assets/icons/clockIcon";
import PLACEHOLDER_IMAGE from "@/assets/images/placeholderImg.png";
import Container from "@/components/common/container";
import PageHeader from "@/components/common/pageHeader";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import CouponField from "@/shared/ui/couponField";
import GenericText from "@/shared/ui/genericText";
const Cart = () => {
  return (
    <section className="min-h-[calc(100dvh-266px)] md:min-h-[calc(100dvh-203px)]">
      <Container width="md">
        {/* @_____# Page Header #__________@ */}
        <PageHeader title="Cart" />

        {/* @_____# cart #__________@ */}
        <Card className="px-[16px] py-[16px] xs:px-[20px] xs:py-[20px] md:px-[30px] md:py-[30px]  xl:px-[48px] xl:py-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div className="flex flex-col gap-[16px]">
              <Card padding="sm" cardStyle="border" radius="sm">
                <div className="flex gap-x-[12px] lg:gap-x-[20px]">
                  <div className="overflow-hidden w-124px">
                    <img src={PLACEHOLDER_IMAGE} alt="image" className="rounded-[8px] " />
                  </div>
                  <div className="flex flex-col">
                    <GenericText size="2xl" fontWeight="bold" color="text-5">
                      Full Package vol. 2
                    </GenericText>
                    <div className="flex items-center gap-x-[6px] mt-[4px] lg:mt-[8px]">
                      <div>
                        <ClockIcon className="w-[18px] lg:w-[24px]" />
                      </div>
                      <GenericText>Duration: 24 June - 29 june 2021</GenericText>
                    </div>
                    <div className="mt-[6px] lg:mt-[12px]">
                      <GenericText size="xlg" fontWeight="semiBold" color="text-5">
                        Tk. 800
                      </GenericText>
                    </div>
                  </div>
                </div>
              </Card>
              <Card padding="sm" cardStyle="border" radius="sm">
                <div className="flex gap-x-[12px] lg:gap-x-[20px]">
                  <div className="overflow-hidden w-124px">
                    <img src={PLACEHOLDER_IMAGE} alt="image" className="rounded-[8px] " />
                  </div>
                  <div className="flex flex-col">
                    <GenericText size="2xl" fontWeight="bold" color="text-5">
                      Full Package vol. 2
                    </GenericText>
                    <div className="flex items-center gap-x-[6px] mt-[4px] lg:mt-[8px]">
                      <div>
                        <ClockIcon className="w-[18px] lg:w-[24px]" />
                      </div>
                      <GenericText>Duration: 24 June - 29 june 2021</GenericText>
                    </div>
                    <div className="mt-[6px] lg:mt-[12px]">
                      <GenericText size="xlg" fontWeight="semiBold" color="text-5">
                        Tk. 800
                      </GenericText>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <Card padding="sm" cardStyle="border" radius="sm">
              <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                <div className="flex justify-between items-center">
                  <GenericText size="lg" fontWeight="regular" color="text-3">
                    Price
                  </GenericText>
                  <GenericText size="lg" fontWeight="regular" color="text-3">
                    Tk. 800
                  </GenericText>
                </div>
                <div className="flex justify-between items-center">
                  <GenericText size="lg" fontWeight="regular" color="text-3">
                    Discount
                  </GenericText>
                  <GenericText size="lg" fontWeight="regular" color="text-3">
                    - Tk. 100
                  </GenericText>
                </div>
                <div className="flex justify-between items-center">
                  <GenericText size="lg" fontWeight="regular" color="text-3">
                    VAT
                  </GenericText>
                  <GenericText size="lg" fontWeight="regular" color="text-3">
                    Tk. 50
                  </GenericText>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#E5E5F0] pt-[16px]">
                  <GenericText size="lg" fontWeight="semiBold" color="text-5">
                    Grand Total
                  </GenericText>
                  <GenericText size="lg" fontWeight="semiBold" color="text-5">
                    Tk. 50
                  </GenericText>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-12  items-center border-t border-t-[#E5E5F0] pt-[16px]">
                  <div className="col-span-5 mb-[12px] md:mb-[0px]">
                    <GenericText size="lg" fontWeight="regular" color="text-5">
                      Apply Coupon
                    </GenericText>
                  </div>
                  <div className="col-span-7">
                    <CouponField />
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#E5E5F0] pt-[16px]">
                  <GenericText size="lg" fontWeight="semiBold" color="text-5">
                    Total
                  </GenericText>
                  <GenericText size="lg" fontWeight="semiBold" color="text-5">
                    Tk. 50
                  </GenericText>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#E5E5F0] pt-[16px]">
                  <div>
                    <input type="checkbox"/>
                    <GenericText size="xlg" fontWeight="regular" color="text-5">
                      I agree all terms and conditions
                    </GenericText>
                  </div>
                  <div>
                    <Button size="size-4" variant="secondary">
                      Payment
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default Cart;
