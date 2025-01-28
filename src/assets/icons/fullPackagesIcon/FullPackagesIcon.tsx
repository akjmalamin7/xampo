interface Props {
  type?: "round";
  className?: string;
}

const FullPackagesIcon = ({ type, className }: Props) => {
  const roundIcon = (
    <svg
      width="91"
      height="87"
      className={className}
      viewBox="0 0 91 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="71" cy="20" r="20" fill="#0052CC" />
      <g filter="url(#filter0_b_1_4282)">
        <path
          d="M57.3333 15.405C69.2658 16.05 75.25 20.4575 75.25 36.8334V58.3334C75.25 72.6667 71.6667 79.8334 53.75 79.8334H32.25C14.3333 79.8334 10.75 72.6667 10.75 58.3334V36.8334C10.75 20.4934 16.7342 16.05 28.6667 15.405"
          fill="white"
          fillOpacity="0.3"
        />
        <path
          d="M57.3333 15.405C69.2658 16.05 75.25 20.4575 75.25 36.8334V58.3334C75.25 72.6667 71.6667 79.8334 53.75 79.8334H32.25C14.3333 79.8334 10.75 72.6667 10.75 58.3334V36.8334C10.75 20.4934 16.7342 16.05 28.6667 15.405"
          stroke="#253642"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.6665 44.7166H53.7498"
          stroke="#253642"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.6665 59.05H44.3615"
          stroke="#253642"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.8332 22.5001H50.1665C57.3332 22.5001 57.3332 18.9167 57.3332 15.3334C57.3332 8.16675 53.7498 8.16675 50.1665 8.16675H35.8332C32.2498 8.16675 28.6665 8.16675 28.6665 15.3334C28.6665 22.5001 32.2498 22.5001 35.8332 22.5001Z"
          fill="white"
          fillOpacity="0.3"
          stroke="#253642"
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_4282"
          x="-3.75"
          y="-6.33423"
          width="93.5"
          height="100.667"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_4282" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_4282"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  const defaultIcon = (
    <svg
      width="109"
      height="100"
      className={className}
      viewBox="0 0 109 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="84" cy="25" r="25" fill="#0052CC" />
      <g filter="url(#filter0_b_1_3791)">
        <path
          d="M2.875 67.4167V22.375L8.625 19.5H82.4167L86.25 20.4583L90.0833 25.25V64.5417L88.1667 68.375L84.3333 71.25H41.2083L39.2917 86.5833L36.4167 88.5H17.25L14.375 86.5833L12.4583 71.25H8.625L2.875 67.4167Z"
          fill="url(#paint0_linear_1_3791)"
        />
        <path
          d="M41.2083 70.25H40.3255L40.216 71.126L38.3561 86.0052L36.1139 87.5H17.5528L15.3105 86.0052L13.4506 71.126L13.3411 70.25H12.4583H8.92777L3.875 66.8815V22.993L8.86107 20.5H82.2935L85.68 21.3466L89.0833 25.6008V64.3056L87.3778 67.7166L84 70.25H41.2083Z"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          style={{ mixBlendMode: "overlay" }}
        />
      </g>
      <path
        d="M83.9141 16.9844H8.08594C3.62735 16.9844 0 20.6117 0 25.0703V66.0391C0 70.4977 3.62735 74.125 8.08594 74.125H11.6797V85.625C11.6797 88.5974 14.0979 91.0156 17.0703 91.0156H37.5547C40.5271 91.0156 42.9453 88.5974 42.9453 85.625V74.125H83.9141C88.3727 74.125 92 70.4977 92 66.0391V25.0703C92 20.6117 88.3727 16.9844 83.9141 16.9844ZM37.5547 85.625H17.0703V69.9922C17.0703 64.251 20.9014 58.3125 27.3125 58.3125C33.7236 58.3125 37.5547 64.251 37.5547 69.9922V85.625ZM19.9453 45.5547C19.9453 41.4925 23.2503 38.1875 27.3125 38.1875C31.3747 38.1875 34.6797 41.4925 34.6797 45.5547C34.6797 49.6169 31.3747 52.9219 27.3125 52.9219C23.2503 52.9219 19.9453 49.6169 19.9453 45.5547ZM86.6094 66.0391C86.6094 67.5253 85.4003 68.7344 83.9141 68.7344H42.8973C42.6328 64.9318 41.1862 61.2177 38.8306 58.3858C37.8343 57.188 36.7037 56.1737 35.4691 55.3559C38.2785 53.0137 40.0703 49.4898 40.0703 45.5547C40.0703 38.5201 34.3471 32.7969 27.3125 32.7969C20.2779 32.7969 14.5547 38.5201 14.5547 45.5547C14.5547 49.4898 16.3465 53.0137 19.1561 55.3557C17.9213 56.1737 16.7907 57.1878 15.7945 58.3856C13.4388 61.2177 11.9923 64.9318 11.7277 68.7344H8.08594C6.59974 68.7344 5.39062 67.5253 5.39062 66.0391V25.0703C5.39062 23.5841 6.59974 22.375 8.08594 22.375H83.9141C85.4003 22.375 86.6094 23.5841 86.6094 25.0703V66.0391Z"
        fill="#253642"
      />
      <path
        d="M77.625 31.3594H63.25C61.7615 31.3594 60.5547 32.5662 60.5547 34.0547C60.5547 35.5432 61.7615 36.75 63.25 36.75H77.625C79.1135 36.75 80.3203 35.5432 80.3203 34.0547C80.3203 32.5662 79.1135 31.3594 77.625 31.3594Z"
        fill="#253642"
      />
      <path
        d="M77.625 42.8594H63.25C61.7615 42.8594 60.5547 44.0662 60.5547 45.5547C60.5547 47.0432 61.7615 48.25 63.25 48.25H77.625C79.1135 48.25 80.3203 47.0432 80.3203 45.5547C80.3203 44.0662 79.1135 42.8594 77.625 42.8594Z"
        fill="#253642"
      />
      <path
        d="M77.625 54.3594H63.25C61.7615 54.3594 60.5547 55.5662 60.5547 57.0547C60.5547 58.5432 61.7615 59.75 63.25 59.75H77.625C79.1135 59.75 80.3203 58.5432 80.3203 57.0547C80.3203 55.5662 79.1135 54.3594 77.625 54.3594Z"
        fill="#253642"
      />
      <path
        d="M51.75 59.75C53.2386 59.75 54.4453 58.5433 54.4453 57.0547C54.4453 55.5661 53.2386 54.3594 51.75 54.3594C50.2614 54.3594 49.0547 55.5661 49.0547 57.0547C49.0547 58.5433 50.2614 59.75 51.75 59.75Z"
        fill="#253642"
      />
      <path
        d="M51.75 48.25C53.2386 48.25 54.4453 47.0433 54.4453 45.5547C54.4453 44.0661 53.2386 42.8594 51.75 42.8594C50.2614 42.8594 49.0547 44.0661 49.0547 45.5547C49.0547 47.0433 50.2614 48.25 51.75 48.25Z"
        fill="#253642"
      />
      <path
        d="M51.75 36.7525C53.2386 36.7525 54.4453 35.5457 54.4453 34.0571C54.4453 32.5686 53.2386 31.3618 51.75 31.3618C50.2614 31.3618 49.0547 32.5686 49.0547 34.0571C49.0547 35.5457 50.2614 36.7525 51.75 36.7525Z"
        fill="#253642"
      />
      <defs>
        <filter
          id="filter0_b_1_3791"
          x="-9.125"
          y="7.5"
          width="111.208"
          height="93"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_3791" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_3791"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_3791"
          x1="9.48848"
          y1="19.5"
          x2="91.4594"
          y2="47.742"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.6" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );

  let content: React.ReactNode;

  switch (type) {
    case "round":
      content = roundIcon;
      break;
    default:
      content = defaultIcon;
      break;
  }

  return <>{content}</>;
};

export default FullPackagesIcon;
