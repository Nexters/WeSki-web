import React from 'react';
import { cn } from '@/shared/lib';

const BluesSlopPath = ({ color }: { color?: string }) => {
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
        d="M232 169L239.53 173.278L239.47 164.618L232 169ZM233.964 169.736C234.378 169.731 234.709 169.39 234.703 168.976C234.698 168.562 234.357 168.231 233.943 168.237L233.964 169.736ZM237.804 168.13C237.39 168.147 237.069 168.496 237.086 168.91C237.103 169.324 237.453 169.645 237.867 169.628L237.804 168.13ZM241.766 169.41C242.179 169.381 242.49 169.022 242.461 168.609C242.432 168.196 242.074 167.885 241.661 167.914L241.766 169.41ZM245.509 167.587C245.096 167.628 244.796 167.995 244.837 168.408C244.878 168.82 245.245 169.121 245.657 169.08L245.509 167.587ZM249.537 168.635C249.948 168.582 250.238 168.206 250.185 167.795C250.132 167.384 249.756 167.094 249.345 167.148L249.537 168.635ZM253.165 166.594C252.756 166.66 252.478 167.045 252.543 167.454C252.609 167.862 252.994 168.141 253.403 168.075L253.165 166.594ZM257.248 167.398C257.655 167.32 257.921 166.927 257.843 166.52C257.765 166.113 257.372 165.847 256.965 165.925L257.248 167.398ZM260.74 165.139C260.336 165.23 260.082 165.631 260.173 166.035C260.264 166.44 260.665 166.694 261.069 166.603L260.74 165.139ZM264.87 165.686C265.271 165.582 265.512 165.173 265.408 164.772C265.305 164.371 264.896 164.13 264.495 164.234L264.87 165.686ZM268.22 163.207C267.823 163.324 267.595 163.74 267.711 164.138C267.828 164.535 268.244 164.763 268.642 164.647L268.22 163.207ZM272.375 163.486C272.768 163.356 272.982 162.932 272.853 162.539C272.723 162.146 272.299 161.932 271.906 162.061L272.375 163.486ZM275.545 160.795C275.157 160.938 274.957 161.369 275.1 161.757C275.242 162.146 275.673 162.346 276.062 162.203L275.545 160.795ZM279.711 160.793C280.095 160.637 280.28 160.2 280.124 159.816C279.968 159.432 279.53 159.248 279.146 159.403L279.711 160.793ZM282.697 157.888C282.319 158.057 282.15 158.501 282.319 158.879C282.488 159.257 282.932 159.426 283.31 159.256L282.697 157.888ZM286.843 157.596C287.214 157.413 287.367 156.964 287.184 156.592C287.001 156.22 286.552 156.068 286.18 156.25L286.843 157.596ZM289.614 154.479C289.25 154.676 289.114 155.131 289.311 155.495C289.507 155.86 289.962 155.996 290.327 155.799L289.614 154.479ZM293.729 153.874C294.086 153.663 294.204 153.203 293.993 152.847C293.782 152.49 293.321 152.373 292.965 152.584L293.729 153.874ZM296.238 150.553C295.891 150.779 295.793 151.243 296.018 151.591C296.244 151.938 296.709 152.036 297.056 151.811L296.238 150.553ZM300.296 149.6C300.633 149.359 300.71 148.89 300.469 148.553C300.227 148.217 299.759 148.139 299.422 148.381L300.296 149.6ZM302.492 146.063C302.168 146.321 302.114 146.793 302.373 147.117C302.631 147.441 303.102 147.494 303.426 147.236L302.492 146.063ZM306.423 144.704C306.73 144.427 306.755 143.953 306.478 143.645C306.201 143.337 305.727 143.312 305.419 143.589L306.423 144.704ZM308.168 140.92C307.883 141.221 307.897 141.696 308.198 141.98C308.499 142.265 308.973 142.252 309.258 141.951L308.168 140.92ZM237.867 169.628C239.182 169.573 240.482 169.5 241.766 169.41L241.661 167.914C240.391 168.003 239.106 168.075 237.804 168.13L237.867 169.628ZM245.657 169.08C246.968 168.949 248.262 168.801 249.537 168.635L249.345 167.148C248.084 167.311 246.805 167.458 245.509 167.587L245.657 169.08ZM253.403 168.075C254.704 167.867 255.986 167.64 257.248 167.398L256.965 165.925C255.718 166.164 254.452 166.388 253.165 166.594L253.403 168.075ZM261.069 166.603C262.358 166.313 263.625 166.007 264.87 165.686L264.495 164.234C263.266 164.551 262.014 164.853 260.74 165.139L261.069 166.603ZM268.642 164.647C269.912 164.275 271.156 163.887 272.375 163.486L271.906 162.061C270.703 162.457 269.474 162.84 268.22 163.207L268.642 164.647ZM276.062 162.203C277.308 161.746 278.525 161.275 279.711 160.793L279.146 159.403C277.976 159.879 276.776 160.344 275.545 160.795L276.062 162.203ZM283.31 159.256C284.523 158.713 285.701 158.159 286.843 157.596L286.18 156.25C285.054 156.805 283.893 157.351 282.697 157.888L283.31 159.256ZM290.327 155.799C291.505 155.162 292.639 154.52 293.729 153.874L292.965 152.584C291.892 153.219 290.775 153.852 289.614 154.479L290.327 155.799ZM297.056 151.811C298.194 151.071 299.274 150.332 300.296 149.6L299.422 148.381C298.419 149.099 297.358 149.825 296.238 150.553L297.056 151.811ZM303.426 147.236C304.513 146.371 305.512 145.523 306.423 144.704L305.419 143.589C304.532 144.388 303.556 145.216 302.492 146.063L303.426 147.236ZM309.258 141.951C309.738 141.443 310.176 140.953 310.573 140.484L309.427 139.516C309.05 139.962 308.63 140.431 308.168 140.92L309.258 141.951Z"
      />
    </svg>
  );
};

export default BluesSlopPath;
