import React from 'react';
import { cn } from '@/shared/lib';

const FantasySlopePath = ({ color }: { color?: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cn('fill-current', color ? color : 'fill-[#171D23]')}
        d="M248 85L248.359 85.6584L248 85ZM217.5 100.5L225.165 96.4693L217.842 91.8465L217.5 100.5ZM218.797 99.8203C219.085 99.523 219.078 99.0482 218.781 98.7598C218.483 98.4714 218.009 98.4787 217.72 98.7761L218.797 99.8203ZM220.165 96.9388C219.811 97.1538 219.698 97.6151 219.913 97.9691C220.128 98.3232 220.59 98.4359 220.944 98.2209L220.165 96.9388ZM223.414 96.8715C223.785 96.6855 223.934 96.2347 223.748 95.8646C223.562 95.4945 223.111 95.3451 222.741 95.5311L223.414 96.8715ZM225.368 94.2797C224.991 94.4515 224.825 94.8964 224.997 95.2732C225.169 95.6501 225.613 95.8164 225.99 95.6445L225.368 94.2797ZM228.604 94.4869C228.984 94.3225 229.159 93.881 228.995 93.5009C228.83 93.1207 228.389 92.9458 228.009 93.1102L228.604 94.4869ZM230.663 91.9794C230.281 92.1402 230.102 92.58 230.263 92.9617C230.424 93.3434 230.863 93.5225 231.245 93.3617L230.663 91.9794ZM233.898 92.2497C234.28 92.0899 234.46 91.6505 234.3 91.2684C234.14 90.8863 233.701 90.7061 233.319 90.8659L233.898 92.2497ZM235.97 89.7534C235.588 89.9145 235.41 90.3544 235.571 90.736C235.732 91.1176 236.172 91.2965 236.553 91.1354L235.97 89.7534ZM239.205 90.0041C239.586 89.8398 239.761 89.3984 239.596 89.0182C239.432 88.6379 238.991 88.4629 238.61 88.6272L239.205 90.0041ZM241.234 87.4723C240.857 87.6421 240.688 88.0861 240.858 88.4638C241.028 88.8416 241.472 89.0102 241.849 88.8404L241.234 87.4723ZM244.477 87.6265C244.851 87.4483 245.01 87.0008 244.832 86.6268C244.653 86.2529 244.206 86.0941 243.832 86.2723L244.477 87.6265ZM246.387 85.0068C246.019 85.1971 245.875 85.6496 246.066 86.0175C246.256 86.3855 246.708 86.5295 247.076 86.3392L246.387 85.0068ZM249.827 84.8043C250.179 84.586 250.287 84.1237 250.069 83.7717C249.851 83.4197 249.388 83.3113 249.036 83.5296L249.827 84.8043ZM251.667 81.6754C251.343 81.9341 251.291 82.4061 251.55 82.7296C251.808 83.0531 252.28 83.1056 252.604 82.8468L251.667 81.6754ZM255.12 80.5559C255.407 80.2576 255.398 79.7828 255.1 79.4955C254.801 79.2081 254.327 79.217 254.039 79.5154L255.12 80.5559ZM256.097 77.0605C255.854 77.396 255.929 77.8649 256.265 78.1078C256.6 78.3508 257.069 78.2757 257.312 77.9402L256.097 77.0605ZM259.104 75.0253C259.292 74.6565 259.146 74.2047 258.777 74.0162C258.409 73.8277 257.957 73.9738 257.768 74.3427L259.104 75.0253ZM258.945 71.4114C258.831 71.8098 259.062 72.2248 259.46 72.3383C259.859 72.4518 260.274 72.2209 260.387 71.8226L258.945 71.4114ZM220.944 98.2209C221.659 97.7865 222.489 97.3365 223.414 96.8715L222.741 95.5311C221.792 96.0078 220.925 96.4774 220.165 96.9388L220.944 98.2209ZM225.99 95.6445C226.822 95.2654 227.697 94.8794 228.604 94.4869L228.009 93.1102C227.095 93.5053 226.211 93.8954 225.368 94.2797L225.99 95.6445ZM231.245 93.3617C232.114 92.9956 233.001 92.625 233.898 92.2497L233.319 90.8659C232.422 91.2409 231.534 91.6124 230.663 91.9794L231.245 93.3617ZM236.553 91.1354C237.438 90.7621 238.324 90.3849 239.205 90.0041L238.61 88.6272C237.734 89.0058 236.852 89.3812 235.97 89.7534L236.553 91.1354ZM241.849 88.8404C242.741 88.4394 243.62 88.0346 244.477 87.6265L243.832 86.2723C242.987 86.6748 242.118 87.0749 241.234 87.4723L241.849 88.8404ZM247.076 86.3392C247.513 86.1133 247.941 85.8864 248.359 85.6584L247.641 84.3416C247.234 84.5638 246.815 84.7855 246.387 85.0068L247.076 86.3392ZM248.359 85.6584C248.867 85.3813 249.356 85.0962 249.827 84.8043L249.036 83.5296C248.589 83.8067 248.124 84.0778 247.641 84.3416L248.359 85.6584ZM252.604 82.8468C253.536 82.1011 254.372 81.3322 255.12 80.5559L254.039 79.5154C253.336 80.2457 252.548 80.9708 251.667 81.6754L252.604 82.8468ZM257.312 77.9402C258.037 76.9393 258.628 75.9562 259.104 75.0253L257.768 74.3427C257.327 75.2063 256.776 76.1234 256.097 77.0605L257.312 77.9402ZM260.387 71.8226C260.573 71.1706 260.69 70.5826 260.745 70.0828L259.255 69.9172C259.21 70.3202 259.112 70.8252 258.945 71.4114L260.387 71.8226Z"
      />
    </svg>
  );
};

export default FantasySlopePath;