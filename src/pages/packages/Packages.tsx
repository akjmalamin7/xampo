import ArrowIcon from "@/assets/icons/arrowIcon/ArrowIcon";
import Container from "@/components/common/container";
import CourseCard from "@/components/common/courseCard";
import PageHeader from "@/components/common/pageHeader";
import Button from "@/shared/ui/button";
import GenericText from "@/shared/ui/genericText";

const Packages = () => {
  return (
    <section>
      <Container width="sm">
        {/* @_____# Page Header #__________@ */}
        <PageHeader
          title="My Package"
          children={
            <Button type="outline" variant="primary" size="size-3">
              <GenericText color="text-6">Active Course </GenericText>
              <ArrowIcon color="primary" rotate="bottom" />
            </Button>
          }
        />
        {/* @_____# Packages #__________@ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[30px]">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </Container>
    </section>
  );
};

export default Packages;
