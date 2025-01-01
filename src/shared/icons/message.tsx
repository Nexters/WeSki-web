import type { SVGProps } from 'react';

interface MessageIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const MessageIcon = ({ className, ...props }: MessageIconProps) => {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 3.49102C4.73858 3.49102 2.5 5.73451 2.5 8.50199C2.5 9.56189 2.82765 10.5432 3.38698 11.3522C3.57208 11.6199 3.61671 11.9773 3.47008 12.2935L2.90456 13.513H7.5C10.2614 13.513 12.5 11.2695 12.5 8.50199C12.5 5.73451 10.2614 3.49102 7.5 3.49102ZM1.25 8.50199C1.25 5.04264 4.04822 2.23828 7.5 2.23828C10.9518 2.23828 13.75 5.04264 13.75 8.50199C13.75 11.9613 10.9518 14.7657 7.5 14.7657H2.41349C1.7046 14.7657 1.25616 14.0099 1.58378 13.3887L2.2636 11.9228C1.62263 10.9391 1.25 9.7633 1.25 8.50199Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 9.31606C5.44873 9.31606 5.8125 8.9515 5.8125 8.50178C5.8125 8.05207 5.44873 7.6875 5 7.6875C4.55127 7.6875 4.1875 8.05207 4.1875 8.50178C4.1875 8.9515 4.55127 9.31606 5 9.31606Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9.31606C10.4487 9.31606 10.8125 8.9515 10.8125 8.50178C10.8125 8.05207 10.4487 7.6875 10 7.6875C9.55127 7.6875 9.1875 8.05207 9.1875 8.50178C9.1875 8.9515 9.55127 9.31606 10 9.31606Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 9.31606C7.94873 9.31606 8.3125 8.9515 8.3125 8.50178C8.3125 8.05207 7.94873 7.6875 7.5 7.6875C7.05127 7.6875 6.6875 8.05207 6.6875 8.50178C6.6875 8.9515 7.05127 9.31606 7.5 9.31606Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MessageIcon;
