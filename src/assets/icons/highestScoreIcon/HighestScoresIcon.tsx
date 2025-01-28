interface Props {
  className?: string;
}
const HighestScoresIcon = ({ className }: Props) => {
  return (
    <svg width="86" height="88" className={className} viewBox="0 0 86 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="20" r="20" fill="#0052CC" />
      <g filter="url(#filter0_b_1_4260)">
        <path
          d="M26.9464 50.4467L26.9106 76.8917C26.9106 80.1167 29.1682 81.6934 31.9632 80.3676L41.5665 75.8168C42.3548 75.4226 43.6806 75.4226 44.469 75.8168L54.1081 80.3676C56.8673 81.6576 59.1606 80.1167 59.1606 76.8917V49.8018"
          fill="white"
          fillOpacity="0.3"
        />
        <path
          d="M26.9464 50.4467L26.9106 76.8917C26.9106 80.1167 29.1682 81.6934 31.9632 80.3676L41.5665 75.8168C42.3548 75.4226 43.6806 75.4226 44.469 75.8168L54.1081 80.3676C56.8673 81.6576 59.1606 80.1167 59.1606 76.8917V49.8018"
          stroke="#253642"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43 55.7501C56.3584 55.7501 67.1875 45.322 67.1875 32.4584C67.1875 19.5948 56.3584 9.16675 43 9.16675C29.6416 9.16675 18.8125 19.5948 18.8125 32.4584C18.8125 45.322 29.6416 55.7501 43 55.7501Z"
          fill="white"
          fillOpacity="0.3"
          stroke="#253642"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1_4260"
          x="4.3125"
          y="-5.33325"
          width="77.375"
          height="100.671"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_4260" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_4260"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HighestScoresIcon;
