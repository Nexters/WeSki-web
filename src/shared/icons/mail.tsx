import type { SVGProps } from 'react';

interface MailIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const MailIcon = ({ className, ...props }: MailIconProps) => {
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
        d="M1.25 5.99572C1.25 4.61198 2.36929 3.49023 3.75 3.49023H11.25C12.6307 3.49023 13.75 4.61198 13.75 5.99572V11.0067C13.75 12.3904 12.6307 13.5122 11.25 13.5122H3.75C2.36929 13.5122 1.25 12.3904 1.25 11.0067V5.99572ZM3.75 4.74298C3.05964 4.74298 2.5 5.30385 2.5 5.99572V11.0067C2.5 11.6986 3.05964 12.2594 3.75 12.2594H11.25C11.9404 12.2594 12.5 11.6986 12.5 11.0067V5.99572C12.5 5.30385 11.9404 4.74298 11.25 4.74298H3.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.88698 6.2312C4.10261 5.96107 4.49592 5.91727 4.76546 6.13337L7.50002 8.32582L10.2346 6.13337C10.5041 5.91727 10.8974 5.96107 11.1131 6.2312C11.3287 6.50133 11.285 6.8955 11.0155 7.1116L7.50002 9.93012L3.98459 7.1116C3.71505 6.8955 3.67135 6.50133 3.88698 6.2312Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MailIcon;
