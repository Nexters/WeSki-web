import React from 'react';
import { cn } from '@/shared/lib';

const ReggaeSlopPath = ({ color }: { color?: string }) => {
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
        d="M118.5 111L117.774 111.188L118.5 111ZM143.692 147.184C144.07 147.354 144.514 147.186 144.684 146.808C144.854 146.43 144.686 145.986 144.308 145.816L143.692 147.184ZM111.149 99.5574C111.521 99.7403 111.971 99.5873 112.153 99.2157C112.336 98.844 112.183 98.3945 111.812 98.2116L111.149 99.5574ZM115.095 101.172C114.849 100.839 114.38 100.767 114.046 101.012C113.713 101.257 113.641 101.727 113.886 102.061L115.095 101.172ZM115.83 105.486C116 105.864 116.443 106.033 116.821 105.863C117.199 105.694 117.368 105.25 117.199 104.872L115.83 105.486ZM118.659 108.804C118.537 108.408 118.117 108.186 117.721 108.308C117.325 108.43 117.103 108.849 117.225 109.245L118.659 108.804ZM118.246 113.036C118.348 113.437 118.756 113.68 119.157 113.579C119.559 113.477 119.802 113.069 119.7 112.668L118.246 113.036ZM120.641 116.366C120.537 115.965 120.128 115.725 119.727 115.829C119.326 115.933 119.085 116.343 119.19 116.744L120.641 116.366ZM120.208 120.451C120.325 120.848 120.742 121.076 121.139 120.959C121.537 120.842 121.764 120.425 121.647 120.028L120.208 120.451ZM122.809 123.622C122.67 123.232 122.241 123.029 121.851 123.168C121.461 123.308 121.258 123.737 121.397 124.127L122.809 123.622ZM122.847 127.728C123.018 128.105 123.462 128.272 123.84 128.101C124.217 127.93 124.384 127.485 124.213 127.108L122.847 127.728ZM125.926 130.435C125.717 130.077 125.258 129.956 124.9 130.165C124.543 130.374 124.422 130.833 124.631 131.191L125.926 130.435ZM126.787 134.447C127.035 134.778 127.505 134.846 127.836 134.598C128.168 134.349 128.236 133.879 127.987 133.548L126.787 134.447ZM130.395 136.4C130.11 136.1 129.636 136.087 129.335 136.372C129.034 136.657 129.022 137.132 129.307 137.432L130.395 136.4ZM132.141 140.107C132.457 140.375 132.93 140.336 133.198 140.02C133.466 139.704 133.426 139.23 133.11 138.963L132.141 140.107ZM136.088 141.242C135.747 141.006 135.28 141.09 135.044 141.431C134.808 141.771 134.893 142.239 135.233 142.475L136.088 141.242ZM138.518 144.55C138.877 144.757 139.335 144.634 139.542 144.275C139.749 143.916 139.626 143.458 139.267 143.251L138.518 144.55ZM142.596 145.015C142.224 144.833 141.775 144.988 141.594 145.36C141.412 145.733 141.567 146.182 141.939 146.363L142.596 145.015ZM109.634 99.2379C109.941 99.1821 110.465 99.2207 111.149 99.5574L111.812 98.2116C110.91 97.7676 110.058 97.6362 109.366 97.7621L109.634 99.2379ZM113.886 102.061C114.53 102.937 115.19 104.06 115.83 105.486L117.199 104.872C116.522 103.364 115.811 102.146 115.095 101.172L113.886 102.061ZM117.225 109.245C117.413 109.857 117.597 110.504 117.774 111.188L119.226 110.812C119.043 110.107 118.854 109.439 118.659 108.804L117.225 109.245ZM117.774 111.188C117.934 111.805 118.091 112.42 118.246 113.036L119.7 112.668C119.544 112.051 119.387 111.432 119.226 110.812L117.774 111.188ZM119.19 116.744C119.513 117.986 119.847 119.223 120.208 120.451L121.647 120.028C121.292 118.82 120.962 117.599 120.641 116.366L119.19 116.744ZM121.397 124.127C121.831 125.34 122.309 126.541 122.847 127.728L124.213 127.108C123.694 125.964 123.232 124.802 122.809 123.622L121.397 124.127ZM124.631 131.191C125.275 132.295 125.989 133.381 126.787 134.447L127.987 133.548C127.226 132.53 126.543 131.492 125.926 130.435L124.631 131.191ZM129.307 137.432C130.172 138.344 131.113 139.236 132.141 140.107L133.11 138.963C132.124 138.127 131.222 137.272 130.395 136.4L129.307 137.432ZM135.233 142.475C136.257 143.184 137.35 143.876 138.518 144.55L139.267 143.251C138.134 142.597 137.076 141.927 136.088 141.242L135.233 142.475ZM141.939 146.363C142.508 146.64 143.092 146.914 143.692 147.184L144.308 145.816C143.722 145.552 143.151 145.285 142.596 145.015L141.939 146.363Z"
      />
    </svg>
  );
};

export default ReggaeSlopPath;
