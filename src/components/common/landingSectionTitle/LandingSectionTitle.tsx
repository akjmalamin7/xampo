import GenericText from "@/shared/ui/genericText";
import React from "react";

interface Props {
  textAlign?:"start"|"center"|"end";
  color?:"text-1"|"text-2"|"text-3"|"text-4"|"text-5"|"text-6"|"text-7";
  children?: React.ReactNode;
}
const LandingSectionTitle = ({ textAlign,color,children}: Props) => {

  return (
    <GenericText size="10xl" fontWeight="semiBold" color={color} textAlign={textAlign}>
      {children}
    </GenericText>
  );
};

export default LandingSectionTitle;
