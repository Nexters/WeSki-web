import React from 'react';

const CloudIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.0517 17.9998C27.6829 17.9823 29 16.5966 29 14.8899C29 13.1722 27.6659 11.7798 26.0203 11.7798C25.9179 11.7798 25.8168 11.7851 25.7171 11.7957C25.3443 10.6443 24.3009 9.81548 23.072 9.81548C22.7589 9.81548 22.4579 9.86926 22.177 9.96845C21.9036 8.28333 20.4985 7 18.8063 7C16.9181 7 15.3875 8.59765 15.3875 10.5685C15.3875 10.69 15.3933 10.8102 15.4047 10.9286C15.3989 10.9286 15.3932 10.9286 15.3875 10.9286C13.5166 10.9286 12 12.5116 12 14.4643C12 16.417 13.5166 18 15.3875 18H26.0517V17.9998Z"
        fill="#7280FF"
      />
      <g filter="url(#filter0_b_971_82076)">
        <path
          d="M20.0111 24.9998C22.218 24.9758 24 23.0863 24 20.7589C24 18.4166 22.1951 16.5179 19.9686 16.5179C19.8302 16.5179 19.6933 16.5252 19.5585 16.5395C19.054 14.9695 17.6423 13.8393 15.9797 13.8393C15.5562 13.8393 15.1489 13.9126 14.7688 14.0479C14.399 11.75 12.498 10 10.2085 10C7.65391 10 5.58303 12.1786 5.58303 14.8661C5.58303 15.0318 5.59091 15.1957 5.60629 15.3572C5.59854 15.3572 5.59079 15.3571 5.58303 15.3571C3.05189 15.3571 1 17.5158 1 20.1786C1 22.8414 3.05189 25 5.58303 25H20.0111V24.9998Z"
          fill="url(#paint0_linear_971_82076)"
          fillOpacity="0.3"
        />
        <path
          d="M20.0084 24.7498L19.9884 24.75H5.58303C3.20176 24.75 1.25 22.7154 1.25 20.1786C1.25 17.6417 3.20176 15.6071 5.58303 15.6071L5.60497 15.6072L5.88138 15.6087L5.85517 15.3335C5.84053 15.1799 5.83303 15.0239 5.83303 14.8661C5.83303 12.3046 7.80378 10.25 10.2085 10.25C12.3642 10.25 14.1699 11.8996 14.522 14.0876L14.5697 14.3841L14.8527 14.2834C15.2064 14.1576 15.5853 14.0893 15.9797 14.0893C17.5237 14.0893 18.8461 15.1396 19.3204 16.616L19.3827 16.8096L19.5849 16.7881C19.711 16.7747 19.839 16.7679 19.9686 16.7679C22.0452 16.7679 23.75 18.5426 23.75 20.7589C23.75 22.9611 22.0668 24.7275 20.0084 24.7498Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_971_82076"
          x="-1"
          y="8"
          width="27"
          height="19"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_971_82076" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_971_82076"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_971_82076"
          x1="3.46125"
          y1="11.3839"
          x2="22.7709"
          y2="26.7146"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A4DF9" />
          <stop offset="0.447036" stopColor="#9BA5FF" stopOpacity="0.955296" />
          <stop offset="1" stopColor="#3A4DF9" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CloudIcon;
