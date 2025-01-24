import GenericText from "@/shared/ui/genericText";
import React from "react";

interface PageHeaderProps {
  title?: string;
  children?: React.ReactNode;
}
const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mt-[30px] mb-[20px] lg:mt-[40px] lg:mb-[24px]">
      <div>
        <GenericText elementType="h1" size="4xl" fontWeight="bold" className="text-[#495057]">{title ?? ""}</GenericText>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default PageHeader;
