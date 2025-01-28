import SERVICE_BANNER from "@/assets/images/service.png";
import ICON from "@/assets/images/speakerIcon.png";
import Container from "@/components/common/container";
import EmptyFormate from "@/components/common/emptyFormate";
import PageHeader from "@/components/common/pageHeader";
import ServiceItem from "@/components/common/serviceItem";
import PackageNameType from "@/components/pages/createPackage/packageNameType";
import { useGetServicesQuery } from "@/redux/features/services/servicesApi";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import DataNotFound from "@/shared/ui/dataNotFound";
import ErrorMessage from "@/shared/ui/errorMessage";
import GenericText from "@/shared/ui/genericText";
import Loader from "@/shared/ui/loader";
import { CreatePackageModels } from "./createPackage.models";
const CreatePackage = () => {
  const { data, error, isLoading } = useGetServicesQuery(undefined);
  let content = null;
  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <ErrorMessage message={"Error occur"}/>;
  } else if (data?.getDatas?.length === 0) {
    content = <DataNotFound />;
  } else if (data?.getDatas?.length > 0) {
    content = data?.getDatas.map((item:CreatePackageModels) => (
      <ServiceItem key={item._id} icon={ICON} services={item} />
    ));
  }
  // console.log(data)
  return (
    <section>
      <Container width="md">
        {/* @_____# Page Header #__________@ */}
        <PageHeader title="Create Packages">
          <Button type="outline" variant="primary" size="size-3">
            <GenericText color="text-6">Active Course </GenericText>
          </Button>
        </PageHeader>
        {/* @____# package name andtype #____@ */}
        <PackageNameType />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[44px]">
          <Card padding="md" radius="sm">
            <div className="mb-[24px]">
              <GenericText elementType="h2" size="5xl" fontWeight="bold" color="text-5">
                List of the sevice
              </GenericText>
            </div>
            <div className="w-full grid grid-cols-1 gap-[12px] xl:gap-[16px]">{content}</div>
            <div className="bg-customcolor-750 rounded-[8px] mt-[40px] xl:mt-[80px]">
              <img src={SERVICE_BANNER} alt="service banner" className="w-full" />
            </div>
          </Card>
          <Card padding="none" radius="sm">
            <div className="flex flex-col justify-between h-full pb-[20px] lg:pb-[46px]">
              {/* Top Section */}
              <div className="mb-[24px] px-[20px] lg:px-[53px] pt-[20px] lg:pt-[46px]">
                <GenericText elementType="h2" size="5xl" fontWeight="bold" color="text-5">
                  Your Formate
                </GenericText>
              </div>

              {/* Middle Section */}
              <div className="w-full grid grid-cols-1 gap-[12px] lg:gap-[16px] px-[20px] lg:px-[53px]">
                <EmptyFormate />
              </div>

              {/* Bottom Section */}
              <div className="border-t border-t-[#E1E1E1] pt-[16px] lg:pt-[20px] px-[20px] lg:px-[35px]">
                <div className="flex justify-between">
                  <GenericText size="4xl" fontWeight="semiBold" color="text-5">
                    Total price
                  </GenericText>
                  <GenericText size="4xl" fontWeight="semiBold" color="text-5">
                    00 Tk
                  </GenericText>
                </div>
                <div className="flex gap-[16px] xl:gap-[20px] mt-[20px] xl:mt-[37px]">
                  <Button size="size-6" variant="tertiary" width="full">
                    <GenericText size="xlg" fontWeight="regular" color="text-5">
                      Save Draft
                    </GenericText>
                  </Button>
                  <Button size="size-6" variant="secondary" width="full">
                    <GenericText size="xlg" fontWeight="regular" color="text-1">
                      Create Package
                    </GenericText>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default CreatePackage;
