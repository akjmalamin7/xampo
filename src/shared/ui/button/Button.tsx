import React from "react";

interface ButtonProps {
  type?: "text" | "normal" | "outline";
  variant?: "primary" | "secondary" | "tertiary" | "white";
  size?: "size-1" | "size-2" | "size-3" | "size-4" | "size-5" | "size-6" | "size-7" | "size-8";
  loading?: boolean;
  disabled?: boolean;
  width?: "auto" | "full";
  customClass?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "normal",
  variant = "primary",
  size = "size-3",
  loading = false,
  disabled = false,
  width = "auto",
  customClass = "",
  children,
  onClick,
}) => {
  // Base classes
  const baseClass = "rounded font-semibold text-center cursor-pointer transition duration-300";

  // Type-specific classes
  const typeClass = {
    normal: "",
    text: "bg-transparent border-none px-0 py-0 h-auto ",
    outline: `bg-transparent border ${
      variant === "primary"
        ? "border-customcolor-750"
        : variant === "secondary"
        ? "border-customcolor-300"
        : variant === "tertiary"
        ? "border-customcolor-1150"
        : "border-customcolor-100"
    }`,
  }[type];

  // Variant-specific classes
  const variantClass = {
    primary: `bg-customcolor-750 text-white`,
    secondary: `bg-customcolor-300 text-customcolor-100`,
    tertiary: `bg-customcolor-1150 text-customcolor-500`,
    white: `bg-customcolor-100 text-customcolor-750`,
  }[variant];

  // Size-specific classes
  const sizeClass = {
    "size-1": "h-[36px] px-[16px] text-[16px] font-regular",
    "size-2": "h-[40px] px-[12px] text-[14px] font-regular",
    "size-3": "h-[36px] md:h-[40px] px-[16px] text-[16px] font-regular",
    "size-4": "h-[40px] lg:h-[44px] px-[20px] text-[16px] font-regular",
    "size-5": "h-[50px] px-[40px] text-[14px] font-regular",
    "size-6": "h-[40px] xl:h-[58px] px-[30px]  text-13 xl:text-[16px] font-semiBold rounded-[14px]",
    "size-7": "h-[45px] lg:h-[64px] px-[30px] lg:px-[40px] text-14 md:text-[16px] font-semiBold",
    "size-8": " h-[68px] px-[40px] text-[16px]",
  }[size];

  // width-specific classes
  const widthClass = width === "full" ? "w-full" : "w-auto";

  // Disabled or loading state classes
  const disabledOrLoadingClass = "opacity-50 cursor-not-allowed hover:none";

  // Final button classes
  const finalClass = `${baseClass} ${typeClass} ${
    type === "outline" ? "" : variantClass
  } ${sizeClass} ${widthClass} ${
    loading || disabled ? disabledOrLoadingClass : ""
  } flex justify-center items-center gap-x-[12px] ${customClass}`;

  return (
    <button
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={loading || disabled}
      className={finalClass}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
