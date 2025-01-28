import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import Container from "@/components/common/container";
import CourseCard from "@/components/common/courseCard";
import { PopularCoursesModels } from "@/components/common/courseCard/popularCourses.models";
import LandingSectionTitle from "@/components/common/landingSectionTitle";
import { useGetPackagesQuery } from "@/redux/features/packages/packagesApi";
import Button from "@/shared/ui/button";
import DataNotFound from "@/shared/ui/dataNotFound";
import ErrorMessage from "@/shared/ui/errorMessage";
import GenericText from "@/shared/ui/genericText";
import Loader from "@/shared/ui/loader";
const PopularCourses = () => {
  const { data, error, isLoading } = useGetPackagesQuery(undefined);
  let content = null;
  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <ErrorMessage />;
  } else if (data?.getData?.length === 0) {
    content = <DataNotFound />;
  } else if (data?.getData?.length > 0) {
    content = data.getData.map((item: PopularCoursesModels) => (
      <CourseCard key={item._id} isCountDown={false} courses={item}  />
    ));
  }
  return (
    <section className="py-[50px] xl:py-[90px] bg-customcolor-200 ">
      <Container width="md">
        {/* @______# heading #_______@ */}
        <div className="mb-[30px] lg:mb-[50px] xl:mb-[70px]">
          <LandingSectionTitle color="text-5" textAlign="center">
            Some popular courses
          </LandingSectionTitle>
        </div>
        
        {/* @______# heading #_______@ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[30px]">
          {content}
        </div>
        <div className="flex justify-end mt-[40px] md:mt-[50px] xl:mt-[95px]">
          <Button type="text" variant="primary" customClass="px-0 py-0">
            <GenericText size="3xl" fontWeight="semiBold" color="text-6">
              See All Pack
            </GenericText>
            <ArrowIcon size="line" color="primary" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PopularCourses;
