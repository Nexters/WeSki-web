import React from 'react';
import { cn } from '@/shared/lib';

const DeltaSlopePlusPath = ({ color }: { color?: string }) => {
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
        d="M180.736 134.145C180.816 133.739 180.552 133.345 180.145 133.264C179.739 133.184 179.345 133.448 179.264 133.855L180.736 134.145ZM156 180L164.473 178.208L158.685 171.766L156 180ZM157.598 179.572C157.902 179.29 157.919 178.816 157.637 178.512C157.356 178.209 156.881 178.191 156.578 178.473L157.598 179.572ZM158.626 176.449C158.341 176.748 158.352 177.223 158.652 177.509C158.952 177.795 159.426 177.784 159.712 177.484L158.626 176.449ZM161.7 175.279C161.969 174.964 161.932 174.491 161.617 174.222C161.302 173.953 160.829 173.99 160.56 174.305L161.7 175.279ZM162.381 172.062C162.128 172.39 162.188 172.861 162.516 173.114C162.843 173.368 163.314 173.307 163.568 172.979L162.381 172.062ZM165.325 170.597C165.563 170.258 165.482 169.79 165.143 169.552C164.805 169.313 164.337 169.395 164.098 169.733L165.325 170.597ZM165.718 167.331C165.493 167.679 165.593 168.144 165.941 168.368C166.289 168.593 166.753 168.493 166.978 168.145L165.718 167.331ZM168.534 165.634C168.746 165.278 168.629 164.817 168.273 164.606C167.917 164.394 167.457 164.511 167.245 164.867L168.534 165.634ZM168.685 162.349C168.486 162.712 168.618 163.168 168.981 163.367C169.344 163.567 169.8 163.434 170 163.071L168.685 162.349ZM171.381 160.463C171.569 160.094 171.422 159.642 171.053 159.454C170.684 159.266 170.233 159.413 170.045 159.782L171.381 160.463ZM171.325 157.175C171.148 157.55 171.308 157.997 171.682 158.174C172.056 158.351 172.504 158.191 172.681 157.817L171.325 157.175ZM173.905 155.135C174.072 154.756 173.9 154.313 173.521 154.146C173.141 153.98 172.699 154.152 172.532 154.531L173.905 155.135ZM173.668 151.853C173.511 152.237 173.695 152.675 174.078 152.831C174.462 152.988 174.9 152.804 175.056 152.421L173.668 151.853ZM176.135 149.681C176.282 149.293 176.087 148.86 175.7 148.714C175.312 148.567 174.879 148.762 174.733 149.149L176.135 149.681ZM175.728 146.419C175.591 146.81 175.797 147.238 176.188 147.375C176.579 147.512 177.007 147.306 177.144 146.916L175.728 146.419ZM178.083 144.121C178.21 143.727 177.993 143.304 177.599 143.177C177.205 143.05 176.782 143.267 176.655 143.661L178.083 144.121ZM177.509 140.883C177.393 141.28 177.621 141.697 178.018 141.813C178.416 141.93 178.832 141.702 178.949 141.304L177.509 140.883ZM179.736 138.463C179.84 138.062 179.6 137.653 179.199 137.548C178.798 137.444 178.389 137.684 178.284 138.085L179.736 138.463ZM178.969 135.26C178.879 135.665 179.134 136.065 179.538 136.155C179.942 136.245 180.343 135.99 180.433 135.586L178.969 135.26ZM159.712 177.484C160.392 176.77 161.055 176.034 161.7 175.279L160.56 174.305C159.931 175.04 159.287 175.756 158.626 176.449L159.712 177.484ZM163.568 172.979C164.17 172.2 164.756 171.405 165.325 170.597L164.098 169.733C163.541 170.524 162.969 171.301 162.381 172.062L163.568 172.979ZM166.978 168.145C167.513 167.317 168.031 166.479 168.534 165.634L167.245 164.867C166.751 165.697 166.242 166.519 165.718 167.331L166.978 168.145ZM170 163.071C170.476 162.205 170.936 161.335 171.381 160.463L170.045 159.782C169.607 160.64 169.154 161.497 168.685 162.349L170 163.071ZM172.681 157.817C173.105 156.92 173.513 156.025 173.905 155.135L172.532 154.531C172.146 155.409 171.744 156.291 171.325 157.175L172.681 157.817ZM175.056 152.421C175.434 151.497 175.793 150.583 176.135 149.681L174.733 149.149C174.395 150.039 174.04 150.942 173.668 151.853L175.056 152.421ZM177.144 146.916C177.477 145.962 177.791 145.029 178.083 144.121L176.655 143.661C176.367 144.558 176.058 145.479 175.728 146.419L177.144 146.916ZM178.949 141.304C179.239 140.314 179.501 139.364 179.736 138.463L178.284 138.085C178.053 138.971 177.795 139.907 177.509 140.883L178.949 141.304ZM180.433 135.586C180.545 135.081 180.646 134.6 180.736 134.145L179.264 133.855C179.177 134.297 179.078 134.767 178.969 135.26L180.433 135.586Z"
      />
    </svg>
  );
};

export default DeltaSlopePlusPath;