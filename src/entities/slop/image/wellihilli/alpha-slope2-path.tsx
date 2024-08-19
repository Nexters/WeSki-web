import React from 'react';
import { cn } from '@/shared/lib';

const AlphaSlope2Path = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#FF9928]')}
        d="M86.5333 127.906L85.9284 128.35L86.5333 127.906ZM107.532 149.586C107.856 149.845 108.328 149.792 108.586 149.468C108.845 149.144 108.792 148.672 108.468 148.414L107.532 149.586ZM67.506 122.013C67.9154 121.95 68.1964 121.567 68.1337 121.158C68.0709 120.749 67.6881 120.468 67.2787 120.53L67.506 122.013ZM70.1903 120.265C69.7763 120.279 69.452 120.626 69.4659 121.04C69.4797 121.454 69.8266 121.778 70.2405 121.764L70.1903 120.265ZM72.9937 121.823C73.4066 121.855 73.7673 121.547 73.7993 121.134C73.8312 120.721 73.5223 120.36 73.1093 120.328L72.9937 121.823ZM76.0077 120.724C75.6015 120.643 75.2066 120.907 75.1258 121.313C75.0449 121.719 75.3087 122.114 75.715 122.195L76.0077 120.724ZM78.3542 122.904C78.7458 123.039 79.1727 122.831 79.3078 122.44C79.4428 122.048 79.2348 121.621 78.8432 121.486L78.3542 122.904ZM81.5516 122.658C81.1858 122.464 80.7317 122.603 80.5375 122.969C80.3433 123.335 80.4824 123.789 80.8483 123.983L81.5516 122.658ZM83.1184 125.451C83.4449 125.706 83.9162 125.648 84.1711 125.322C84.426 124.995 84.3679 124.524 84.0414 124.269L83.1184 125.451ZM86.2046 126.303C85.9303 125.993 85.4564 125.964 85.146 126.238C84.8356 126.512 84.8064 126.986 85.0807 127.297L86.2046 126.303ZM86.853 129.568C87.1085 129.894 87.5799 129.951 87.906 129.696C88.232 129.44 88.2892 128.969 88.0337 128.643L86.853 129.568ZM89.932 130.941C89.6611 130.628 89.1874 130.594 88.8741 130.865C88.5608 131.136 88.5264 131.609 88.7973 131.923L89.932 130.941ZM90.8291 134.188C91.1108 134.491 91.5853 134.509 91.889 134.227C92.1927 133.946 92.2106 133.471 91.9289 133.168L90.8291 134.188ZM93.9973 135.336C93.7075 135.04 93.2327 135.035 92.9367 135.325C92.6407 135.614 92.6357 136.089 92.9255 136.385L93.9973 135.336ZM95.0725 138.529C95.3687 138.818 95.8435 138.813 96.133 138.516C96.4225 138.22 96.4171 137.745 96.1208 137.456L95.0725 138.529ZM98.2887 139.534C97.987 139.25 97.5123 139.264 97.2285 139.566C96.9446 139.868 96.9591 140.342 97.2607 140.626L98.2887 139.534ZM99.4848 142.683C99.7912 142.962 100.266 142.939 100.544 142.633C100.823 142.327 100.8 141.852 100.494 141.574L99.4848 142.683ZM102.734 143.578C102.423 143.304 101.949 143.334 101.675 143.645C101.401 143.956 101.431 144.43 101.742 144.704L102.734 143.578ZM104.031 146.688C104.346 146.957 104.819 146.919 105.088 146.604C105.357 146.289 105.319 145.815 105.004 145.547L104.031 146.688ZM107.307 147.474C106.987 147.212 106.514 147.258 106.252 147.579C105.989 147.899 106.036 148.372 106.356 148.634L107.307 147.474ZM66.1718 122.268C66.5675 122.175 67.015 122.088 67.506 122.013L67.2787 120.53C66.7519 120.611 66.2655 120.705 65.8282 120.808L66.1718 122.268ZM70.2405 121.764C71.1106 121.735 72.0366 121.749 72.9937 121.823L73.1093 120.328C72.0936 120.249 71.1122 120.234 70.1903 120.265L70.2405 121.764ZM75.715 122.195C76.5955 122.37 77.4807 122.603 78.3542 122.904L78.8432 121.486C77.9001 121.161 76.9488 120.911 76.0077 120.724L75.715 122.195ZM80.8483 123.983C81.6342 124.4 82.3953 124.887 83.1184 125.451L84.0414 124.269C83.2452 123.647 82.4099 123.114 81.5516 122.658L80.8483 123.983ZM85.0807 127.297C85.374 127.629 85.6571 127.979 85.9284 128.35L87.1383 127.463C86.8398 127.056 86.5281 126.67 86.2046 126.303L85.0807 127.297ZM85.9284 128.35C86.2229 128.752 86.5317 129.158 86.853 129.568L88.0337 128.643C87.7214 128.244 87.4224 127.851 87.1383 127.463L85.9284 128.35ZM88.7973 131.923C89.4466 132.674 90.127 133.431 90.8291 134.188L91.9289 133.168C91.2372 132.422 90.5686 131.678 89.932 130.941L88.7973 131.923ZM92.9255 136.385C93.6317 137.107 94.3501 137.823 95.0725 138.529L96.1208 137.456C95.4057 136.757 94.6951 136.049 93.9973 135.336L92.9255 136.385ZM97.2607 140.626C98.0094 141.331 98.7538 142.018 99.4848 142.683L100.494 141.574C99.7689 140.914 99.0308 140.232 98.2887 139.534L97.2607 140.626ZM101.742 144.704C102.54 145.406 103.307 146.071 104.031 146.688L105.004 145.547C104.286 144.935 103.525 144.275 102.734 143.578L101.742 144.704ZM106.356 148.634C106.779 148.981 107.172 149.299 107.532 149.586L108.468 148.414C108.114 148.131 107.725 147.817 107.307 147.474L106.356 148.634Z"
      />
    </svg>
  );
};

export default AlphaSlope2Path;
