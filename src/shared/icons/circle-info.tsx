import React, { SVGProps } from 'react';

interface CircleInfoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CircleInfo = ({ className, ...args }: CircleInfoProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...args}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM9.75 6.46875C9.75 6.05454 9.41421 5.71875 9 5.71875C8.58579 5.71875 8.25 6.05454 8.25 6.46875V6.49841C8.25 6.91263 8.58579 7.24841 9 7.24841C9.41421 7.24841 9.75 6.91263 9.75 6.49841V6.46875ZM9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9L8.25 12.375C8.25 12.7892 8.58579 13.125 9 13.125C9.41421 13.125 9.75 12.7892 9.75 12.375L9.75 9Z"
        fill="#C6C8CE"
      />
    </svg>
  );
};

export default CircleInfo;
