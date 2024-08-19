import React from 'react';
import { cn } from '@/shared/lib';

const TurboSlopePath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#447EFF]')}
        d="M289 142.5L289.152 143.234L289 142.5ZM237 168L242.636 161.425L234.124 159.831L237 168ZM238.001 166.714C238.11 166.314 237.874 165.902 237.474 165.793C237.075 165.685 236.663 165.921 236.554 166.32L238.001 166.714ZM237.837 163.372C237.623 163.727 237.737 164.188 238.091 164.402C238.446 164.616 238.907 164.502 239.121 164.148L237.837 163.372ZM240.853 161.863C241.132 161.558 241.111 161.083 240.806 160.804C240.5 160.524 240.026 160.545 239.746 160.851L240.853 161.863ZM242.016 158.704C241.697 158.969 241.654 159.442 241.918 159.76C242.183 160.079 242.656 160.123 242.974 159.858L242.016 158.704ZM245.332 158.094C245.675 157.861 245.764 157.395 245.531 157.052C245.299 156.71 244.832 156.62 244.49 156.853L245.332 158.094ZM247.093 155.224C246.734 155.431 246.612 155.89 246.82 156.249C247.027 156.607 247.486 156.729 247.845 156.522L247.093 155.224ZM250.468 155.1C250.838 154.913 250.985 154.461 250.797 154.092C250.61 153.723 250.158 153.576 249.789 153.763L250.468 155.1ZM252.538 152.444C252.161 152.615 251.994 153.06 252.166 153.437C252.337 153.814 252.782 153.981 253.159 153.809L252.538 152.444ZM255.908 152.621C256.291 152.464 256.474 152.025 256.316 151.642C256.158 151.259 255.72 151.077 255.337 151.234L255.908 152.621ZM258.169 150.119C257.782 150.265 257.586 150.698 257.732 151.085C257.878 151.473 258.311 151.668 258.699 151.522L258.169 150.119ZM261.52 150.5C261.911 150.363 262.118 149.936 261.981 149.545C261.845 149.154 261.417 148.947 261.026 149.083L261.52 150.5ZM263.906 148.116C263.512 148.244 263.296 148.667 263.423 149.061C263.551 149.455 263.974 149.671 264.368 149.543L263.906 148.116ZM267.237 148.644C267.634 148.524 267.858 148.106 267.738 147.709C267.618 147.313 267.199 147.089 266.803 147.209L267.237 148.644ZM269.714 146.354C269.316 146.468 269.085 146.883 269.198 147.281C269.311 147.679 269.726 147.91 270.125 147.797L269.714 146.354ZM273.022 146.997C273.422 146.89 273.66 146.479 273.552 146.079C273.445 145.679 273.034 145.441 272.634 145.549L273.022 146.997ZM275.572 144.783C275.17 144.885 274.927 145.293 275.029 145.694C275.131 146.096 275.539 146.339 275.94 146.237L275.572 144.783ZM278.861 145.516C279.263 145.42 279.511 145.015 279.414 144.612C279.318 144.209 278.913 143.961 278.51 144.058L278.861 145.516ZM281.465 143.365C281.061 143.458 280.808 143.86 280.901 144.264C280.993 144.667 281.395 144.92 281.799 144.828L281.465 143.365ZM284.734 144.172C285.138 144.083 285.395 143.684 285.306 143.279C285.218 142.874 284.818 142.618 284.413 142.706L284.734 144.172ZM287.37 142.074C286.964 142.159 286.705 142.556 286.79 142.962C286.875 143.367 287.273 143.627 287.678 143.542L287.37 142.074ZM290.781 142.867C291.184 142.769 291.43 142.363 291.332 141.961C291.233 141.558 290.827 141.312 290.425 141.41L290.781 142.867ZM293.511 140.523C293.118 140.655 292.907 141.08 293.038 141.472C293.169 141.865 293.594 142.077 293.987 141.946L293.511 140.523ZM297.111 140.724C297.488 140.553 297.655 140.108 297.484 139.731C297.312 139.354 296.868 139.187 296.49 139.359L297.111 140.724ZM299.288 137.864C298.937 138.084 298.832 138.547 299.052 138.898C299.273 139.248 299.736 139.354 300.086 139.133L299.288 137.864ZM302.806 137.073C303.11 136.791 303.128 136.317 302.847 136.013C302.566 135.709 302.091 135.69 301.787 135.971L302.806 137.073ZM303.729 133.63C303.521 133.988 303.642 134.447 304 134.655C304.359 134.863 304.818 134.741 305.026 134.383L303.729 133.63ZM239.121 164.148C239.59 163.37 240.171 162.609 240.853 161.863L239.746 160.851C239.007 161.658 238.365 162.498 237.837 163.372L239.121 164.148ZM242.974 159.858C243.7 159.255 244.488 158.667 245.332 158.094L244.49 156.853C243.61 157.45 242.783 158.067 242.016 158.704L242.974 159.858ZM247.845 156.522C248.684 156.036 249.56 155.562 250.468 155.1L249.789 153.763C248.859 154.236 247.958 154.723 247.093 155.224L247.845 156.522ZM253.159 153.809C254.055 153.403 254.973 153.007 255.908 152.621L255.337 151.234C254.386 151.626 253.452 152.029 252.538 152.444L253.159 153.809ZM258.699 151.522C259.629 151.171 260.571 150.831 261.52 150.5L261.026 149.083C260.066 149.418 259.112 149.763 258.169 150.119L258.699 151.522ZM264.368 149.543C265.323 149.234 266.281 148.934 267.237 148.644L266.803 147.209C265.837 147.501 264.87 147.804 263.906 148.116L264.368 149.543ZM270.125 147.797C271.098 147.52 272.065 147.254 273.022 146.997L272.634 145.549C271.67 145.807 270.695 146.075 269.714 146.354L270.125 147.797ZM275.94 146.237C276.933 145.985 277.908 145.745 278.861 145.516L278.51 144.058C277.552 144.288 276.571 144.53 275.572 144.783L275.94 146.237ZM281.799 144.828C282.816 144.595 283.797 144.376 284.734 144.172L284.413 142.706C283.473 142.912 282.487 143.131 281.465 143.365L281.799 144.828ZM287.678 143.542C288.191 143.434 288.682 143.332 289.152 143.234L288.848 141.766C288.377 141.863 287.884 141.966 287.37 142.074L287.678 143.542ZM289.152 143.234C289.712 143.119 290.255 142.996 290.781 142.867L290.425 141.41C289.917 141.535 289.391 141.653 288.848 141.766L289.152 143.234ZM293.987 141.946C295.125 141.565 296.164 141.155 297.111 140.724L296.49 139.359C295.593 139.767 294.602 140.158 293.511 140.523L293.987 141.946ZM300.086 139.133C301.164 138.456 302.063 137.759 302.806 137.073L301.787 135.971C301.117 136.591 300.291 137.232 299.288 137.864L300.086 139.133ZM305.026 134.383C305.39 133.757 305.623 133.17 305.733 132.657L304.267 132.343C304.197 132.668 304.032 133.107 303.729 133.63L305.026 134.383Z"
      />
    </svg>
  );
};

export default TurboSlopePath;
