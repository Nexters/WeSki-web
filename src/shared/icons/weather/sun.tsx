import React from 'react';

const SunIcon = ({ className }: { className?: string }) => {
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
        d="M30 12C30 16.4183 26.4183 20 22 20C17.5817 20 14 16.4183 14 12C14 7.58172 17.5817 4 22 4C26.4183 4 30 7.58172 30 12Z"
        fill="#FF9928"
      />
      <g filter="url(#filter0_b_971_82078)">
        <path
          d="M25.1439 26.9997C27.8306 26.971 30 24.7036 30 21.9107C30 19.1 27.8027 16.8214 25.0922 16.8214C24.9237 16.8214 24.7571 16.8302 24.5929 16.8474C23.9788 14.9634 22.2602 13.6071 20.2362 13.6071C19.7206 13.6071 19.2248 13.6951 18.7621 13.8575C18.3119 11.1 15.9976 9 13.2103 9C10.1004 9 7.57934 11.6143 7.57934 14.8393C7.57934 15.0382 7.58893 15.2348 7.60766 15.4286C7.59823 15.4286 7.58878 15.4286 7.57934 15.4286C4.49795 15.4286 2 18.0189 2 21.2143C2 24.4096 4.49795 27 7.57934 27L25.1439 26.9997Z"
          fill="url(#paint0_linear_971_82078)"
          fillOpacity="0.3"
        />
        <path
          d="M24.3552 16.9249L24.4179 17.1172L24.619 17.0961C24.7745 17.0798 24.9324 17.0714 25.0922 17.0714C27.6562 17.0714 29.75 19.2294 29.75 21.9107C29.75 24.5745 27.6834 26.7219 25.1425 26.7497C25.1421 26.7497 25.1416 26.7497 25.1412 26.7497L7.57934 26.75C4.64451 26.75 2.25 24.2802 2.25 21.2143C2.25 18.1484 4.64451 15.6786 7.57934 15.6786L7.60635 15.6786L7.88313 15.6801L7.8565 15.4046C7.83854 15.2188 7.82934 15.0302 7.82934 14.8393C7.82934 11.7438 10.247 9.25 13.2103 9.25C15.8665 9.25 18.0835 11.2526 18.5153 13.8977L18.5634 14.1921L18.8448 14.0934C19.2814 13.9402 19.7492 13.8571 20.2362 13.8571C22.144 13.8571 23.7721 15.1359 24.3552 16.9249Z"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_971_82078"
          x="0"
          y="7"
          width="32"
          height="22"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_971_82078" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_971_82078"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_971_82078"
          x1="3.5"
          y1="10.5"
          x2="33.02"
          y2="26.0103"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9898" />
          <stop offset="0.447036" stopColor="#FFDADA" stopOpacity="0.955296" />
          <stop offset="1" stopColor="#FF9898" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SunIcon;
