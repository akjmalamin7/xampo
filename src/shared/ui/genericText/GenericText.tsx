import React from "react";

interface GenericTextProps {
  elementType?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "xsm"
    | "sm"
    | "md"
    | "lg"
    | "xlg"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "5xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "10xl"
    | "11xl"
    | "12xl"
    | "13xl";
  textAlign?: "start" | "center" | "end";
  lineHeight?:
    | "xsm"
    | "sm"
    | "md"
    | "lg"
    | "xlg"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "5xl"
    | "7xl"
    | "8xl"
    | "9xl"
    | "10xl"
    | "11xl"
    | "12xl"
    | "13xl";
  color?: "text-1" | "text-2" | "text-3" | "text-4" | "text-5" | "text-6" | "text-7" | "text-8";
  fontWeight?: "regular" | "medium" | "semiBold" | "bold";
  textDecoration?: "underline" | "overline" | "line-through" | "none";
  className?: string;
  children?: React.ReactNode;
}
const responsiveSizes: Record<string, string> = {
  xsm: "text-12",
  sm: "text-13",
  md: "text-14",
  lg: "text-14 md:text-16",
  xlg: "text-12 md:text-13 lg:text-14 xl:text-18",
  "2xl": "text-16 xl:text-20",
  "3xl": "text-14 xl:text-22",
  "4xl": "text-24",
  "5xl": "text-22 lg:text-24 xl:text-30",
  "6xl": "text-32",
  "7xl": "text-36",
  "8xl": "text-40",
  "9xl": "text-48",
  "10xl": "text-30 lg:text-40 xl:text-51",
  "11xl": " text-[28px] lg:text-51 ",
  "12xl": "text-30 lg:text-60",
  "13xl": "text-30 md:text-40 2xl:text-64",
};
const customTextColors: Record<string, string> = {
  "text-1": "text-customcolor-100", //"#ffffff",
  "text-2": "text-customcolor-150", //"#F8F8FB",
  "text-3": "text-customcolor-300", //"#74788D",
  "text-4": "text-customcolor-450", //#516986",
  "text-5": "text-customcolor-600", //#253642",
  "text-6": "text-customcolor-750", //"#0052CC",
  "text-7": "text-customcolor-950", //#00AF70",
  "text-8": "text-customcolor-650", //#1E266D",
};
const textDecorates: Record<string, string> = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
  none: "no-underline",
};
const fontWeights: Record<string, string> = {
  regular: "font-regular",
  medium: "font-medium",
  semiBold: "font-semiBold",
  bold: "font-bold",
};

const GenericText: React.FC<GenericTextProps> = ({
  children,
  elementType = "p",
  size = "md",
  textAlign = "start",
  lineHeight = "leading-normal",
  textDecoration = "none",
  className,
  color = "text-3",
  fontWeight = "regular",
}) => {
  const Component = elementType;
  const responsiveClass = responsiveSizes[size] || "";
  const textCustomColors = customTextColors[color] || "";
  const weightClass = fontWeights[fontWeight] || "";
  const textDecorate = textDecorates[textDecoration] || "";
  const finalClasses = `${responsiveClass} ${weightClass} text-${textAlign} ${lineHeight} ${textCustomColors} ${textDecorate} ${className}`;

  return <Component className={finalClasses}>{children}</Component>;
};

export default GenericText;
