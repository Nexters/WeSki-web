import React from 'react';

const CameraIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.17194 9.45952C8.76789 9.28636 8.76789 8.71355 9.17195 8.54038L13.7027 6.59865C14.0326 6.45725 14.3996 6.69926 14.3996 7.05822L14.3996 10.9417C14.3996 11.3006 14.0326 11.5427 13.7027 11.4013L9.17194 9.45952Z"
        fill="white"
      />
      <g filter="url(#filter0_b_693_2934)">
        <path
          d="M4.61211 12.5999H10.6871C11.2463 12.5999 11.6996 12.1459 11.6996 11.5858V6.41399C11.6996 5.85392 11.2463 5.3999 10.6871 5.3999H4.61211C4.05292 5.3999 3.59961 5.85392 3.59961 6.41399V11.5858C3.59961 12.1459 4.05292 12.5999 4.61211 12.5999Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_693_2934"
          x="2.59961"
          y="4.3999"
          width="10.0996"
          height="9.19995"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_693_2934" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_693_2934"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CameraIcon;
