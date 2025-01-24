import React from "react";
interface Props {
  width?: "sm" | "md" | "lg" | "xlg";
  className?: string;
  children?: React.ReactNode;
}
const widths: Record<string, string> = {
  sm: "max-w-[1220px]",
  md: "max-w-[1316px]",
  lg: "max-w-[1362px]",
  xlg: "max-w-[1440px]",
};

const Container: React.FC<Props> = ({ width = "lg", className, children }) => {
  const containerWidth = widths[width] || "w-full";
  const finalClasses = `${containerWidth} w-full mx-auto px-[20px] ${className}`;
  return <div className={finalClasses}>{children}</div>;
};

export default Container;
