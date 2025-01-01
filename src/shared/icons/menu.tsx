import type { SVGProps } from 'react';

interface MenuIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const MenuIcon = ({ className, ...props }: MenuIconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="8" cy="16" r="2" fill="currentColor" />
      <circle cx="24" cy="16" r="2" fill="currentColor" />
    </svg>
  );
};

export default MenuIcon;
