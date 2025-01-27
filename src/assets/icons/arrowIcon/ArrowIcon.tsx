interface Props {
  size?: "sm" | "lg" | "line";
  rotate?: "top" | "bottom" | "left" | "right";
  color?:"primary"|"secondary"|"tertiary" | "white";
  style?: React.CSSProperties;
  className?: string;
}

const ArrowIcon = ({ size = "sm", rotate = "top",color="tertiary", style = {}, className }: Props) => {
  let content: React.ReactNode = "";
  let rotation: React.CSSProperties = {};let strokeColor = "";

  switch (rotate) {
    case "top":
      rotation = { transform: "rotate(180deg)" };
      break;
    case "bottom":
      rotation = { transform: "rotate(0deg)" };
      break;
    case "left":
      rotation = { transform: "rotate(90deg)" };
      break;
    case "right":
      rotation = { transform: "rotate(-90deg)" };
      break;
    default:
      rotation = { transform: "rotate(0deg)" };
      break;
  }
switch (color) {
  case "primary":
    strokeColor = "#0052CC";
    break;
  case "secondary":
    strokeColor = "#253642";
    break;
  case "tertiary":
    strokeColor = "#74788D";
    break;
  case "white":
    strokeColor = "#ffffff";
    break;
  default:
    strokeColor = "#253642"; 
    break;
}
  const mergedStyle = { ...rotation, ...style };

  switch (size) {
    case "sm":
      content = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={mergedStyle}
          className={className}
        >
          <path
            d="M2.72003 5.9667L7.0667 10.3134C7.58003 10.8267 8.42003 10.8267 8.93336 10.3134L13.28 5.9667"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    case "lg":
      content = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={mergedStyle}
        >
          <path
            d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case "line":
      content = (
        <svg
          width="29"
          height="17"
          viewBox="0 0 29 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 4L27.075 8.075L23 12.15"
            stroke={strokeColor}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 8.05261H25.29"
            stroke={strokeColor}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    default:
      content = null;
      break;
  }

  return <>{content}</>;
};

export default ArrowIcon;
