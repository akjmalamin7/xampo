import React from "react";

interface GenericTextProps{
  elementType?:"p"|"span"|"h1"|"h2"|"h3"|"h4"|"h5"|"h6";
  size?:"xsm"|"sm"|"md"|"lg"|"xlg"|"2xl"|"3xl"|"4xl"|"5xl"|"5xl"|"7xl"|"8xl"|"9xl"|"10xl"|"11xl"|"12xl"|"13xl";
  textAlign?:"start"|"center"|"end";
  lineHeight?:"xsm"|"sm"|"md"|"lg"|"xlg"|"2xl"|"3xl"|"4xl"|"5xl"|"5xl"|"7xl"|"8xl"|"9xl"|"10xl"|"11xl"|"12xl"|"13xl";
  color?:"text-1"|"text-2"|"text-3"|"text-4"|"text-5"|"text-6"|"text-7";
  fontWeight?:"regular"|"medium"|"semiBold"|"bold";
  children?:React.ReactNode;
}
const responsiveSizes: Record<string, string> = {
  xsm: "text-12",
  sm: "text-13",
  md: "text-14",
  lg: "text-16",
  xlg: "text-18",
  "2xl": "text-20",
  "3xl": "text-22",
  "4xl": "text-24",
  "5xl": "text-30",
  "6xl": "text-32",
  "7xl": "text-36",
  "8xl": "text-40",
  "9xl": "text-48",
  "10xl": "text-51",
  "11xl": "text-51",
  "12xl": "text-60",
  "13xl": "text-64",
};
const customTextColors: Record<string, string> = {
"text-1":"text-customcolor-100",
"text-2":"text-customcolor-200",
"text-3":"text-customcolor-300",
"text-4":"text-customcolor-400",
"text-5":"text-customcolor-500",
"text-6":"text-customcolor-600",
"text-7":"text-customcolor-700",
}

const fontWeights: Record<string, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
};
const GenericText: React.FC<GenericTextProps> = ({
  children,
  elementType = "p",
  size = "md",
  textAlign = "start",
  lineHeight = "leading-normal",
  color = "text-1",
  fontWeight = "regular",
}) => {
  const Component = elementType;
  const responsiveClass = responsiveSizes[size] || "";
  const textCustomColors =  customTextColors[color] || "";
  const weightClass = fontWeights[fontWeight] || "";
  const className = `${responsiveClass} ${weightClass} text-${textAlign} ${lineHeight} ${textCustomColors}`;

  console.log("Generated ClassName:", className); 

  return <Component className={className}>{children}</Component>;
};

export default GenericText