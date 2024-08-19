import React from 'react';
import { cn } from '@/shared/lib';

const JaguarSlopPath = ({ color }: { color?: string }) => {
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
        d="M271.968 75.9696L271.609 76.628L271.968 75.9696ZM316.647 100.606L316.284 101.262C316.291 101.266 316.298 101.269 316.305 101.273L316.647 100.606ZM322.096 113.175L321.447 112.8L322.096 113.175ZM321.006 137.811L321.666 137.454L321.006 137.811ZM327 172L331.278 164.47L322.618 164.53L327 172ZM243.619 73.432C244.028 73.3684 244.308 72.985 244.245 72.5757C244.181 72.1664 243.798 71.8861 243.388 71.9497L243.619 73.432ZM246.47 71.5633C246.057 71.6038 245.756 71.9708 245.797 72.3831C245.837 72.7953 246.204 73.0966 246.616 73.0561L246.47 71.5633ZM249.638 72.8323C250.052 72.8115 250.37 72.4592 250.349 72.0455C250.328 71.6318 249.976 71.3134 249.562 71.3342L249.638 72.8323ZM252.659 71.2504C252.245 71.2519 251.91 71.5888 251.912 72.003C251.913 72.4173 252.25 72.7519 252.664 72.7504L252.659 71.2504ZM255.689 72.8137C256.103 72.8327 256.454 72.5128 256.473 72.099C256.492 71.6852 256.172 71.3343 255.758 71.3153L255.689 72.8137ZM258.854 71.5416C258.442 71.4998 258.074 71.8 258.032 72.2121C257.99 72.6242 258.291 72.9922 258.703 73.0339L258.854 71.5416ZM261.692 73.4296C262.1 73.4972 262.486 73.2207 262.554 72.812C262.622 72.4033 262.345 72.0173 261.936 71.9497L261.692 73.4296ZM264.992 72.5686C264.59 72.471 264.184 72.7182 264.087 73.1207C263.989 73.5233 264.236 73.9287 264.639 74.0263L264.992 72.5686ZM267.517 74.8568C267.909 74.9898 268.335 74.7797 268.468 74.3874C268.601 73.9951 268.391 73.5693 267.999 73.4363L267.517 74.8568ZM270.918 74.6008C270.543 74.4259 270.096 74.5886 269.922 74.9641C269.747 75.3396 269.909 75.7857 270.285 75.9606L270.918 74.6008ZM272.844 77.3023C273.207 77.501 273.663 77.3674 273.862 77.0039C274.06 76.6405 273.927 76.1848 273.563 75.9861L272.844 77.3023ZM276.05 77.3478C275.687 77.1486 275.231 77.2817 275.032 77.6449C274.833 78.0081 274.966 78.4639 275.329 78.6631L276.05 77.3478ZM277.815 80.0272C278.178 80.2266 278.634 80.094 278.833 79.7309C279.033 79.3679 278.9 78.9119 278.537 78.7125L277.815 80.0272ZM281.023 80.0786C280.66 79.879 280.204 80.0114 280.004 80.3744C279.805 80.7373 279.937 81.1934 280.3 81.393L281.023 80.0786ZM282.786 82.7611C283.149 82.9609 283.605 82.8286 283.805 82.4658C284.005 82.1029 283.872 81.6468 283.51 81.4471L282.786 82.7611ZM285.993 82.8148C285.63 82.6149 285.174 82.747 284.974 83.1098C284.774 83.4725 284.906 83.9287 285.269 84.1286L285.993 82.8148ZM287.751 85.4964C288.114 85.6963 288.57 85.5644 288.77 85.2017C288.97 84.8389 288.838 84.3827 288.475 84.1828L287.751 85.4964ZM290.96 85.553C290.598 85.353 290.141 85.4848 289.941 85.8475C289.741 86.2102 289.873 86.6664 290.236 86.8665L290.96 85.553ZM292.717 88.2353C293.079 88.4354 293.536 88.3036 293.736 87.941C293.936 87.5783 293.804 87.1221 293.442 86.9219L292.717 88.2353ZM295.924 88.2922C295.562 88.092 295.105 88.2237 294.905 88.5863C294.705 88.949 294.837 89.4052 295.199 89.6054L295.924 88.2922ZM297.681 90.976C298.044 91.1762 298.5 91.0446 298.701 90.682C298.901 90.3195 298.769 89.8632 298.407 89.6629L297.681 90.976ZM300.888 91.0336C300.526 90.8333 300.069 90.9649 299.869 91.3274C299.669 91.69 299.8 92.1463 300.163 92.3466L300.888 91.0336ZM302.645 93.7179C303.007 93.9183 303.464 93.7868 303.664 93.4242C303.864 93.0617 303.733 92.6054 303.37 92.405L302.645 93.7179ZM305.853 93.7772C305.49 93.5768 305.034 93.7082 304.834 94.0708C304.633 94.4333 304.765 94.8896 305.127 95.09L305.853 93.7772ZM307.605 96.4599C307.967 96.6603 308.424 96.529 308.624 96.1665C308.825 95.804 308.693 95.3477 308.331 95.1472L307.605 96.4599ZM310.814 96.5203C310.451 96.3198 309.995 96.4511 309.794 96.8136C309.594 97.176 309.725 97.6324 310.088 97.8329L310.814 96.5203ZM312.57 99.2063C312.933 99.4068 313.389 99.2756 313.589 98.9131C313.79 98.5507 313.659 98.0943 313.296 97.8938L312.57 99.2063ZM315.775 99.2657C315.413 99.0652 314.957 99.1963 314.756 99.5587C314.555 99.9211 314.687 100.378 315.049 100.578L315.775 99.2657ZM317.358 101.881C317.707 102.104 318.171 102.002 318.394 101.653C318.617 101.304 318.515 100.84 318.166 100.617L317.358 101.881ZM320.314 102.258C320.007 101.979 319.533 102.002 319.254 102.309C318.976 102.615 318.998 103.09 319.305 103.368L320.314 102.258ZM320.933 105.162C321.177 105.497 321.646 105.57 321.981 105.326C322.316 105.082 322.389 104.613 322.145 104.278L320.933 105.162ZM323.469 106.725C323.328 106.335 322.898 106.133 322.508 106.274C322.119 106.415 321.917 106.845 322.058 107.235L323.469 106.725ZM322.44 109.491C322.431 109.905 322.76 110.248 323.174 110.257C323.588 110.266 323.931 109.937 323.94 109.523L322.44 109.491ZM323.359 112.295C323.512 111.911 323.325 111.474 322.941 111.321C322.556 111.167 322.12 111.354 321.966 111.738L323.359 112.295ZM320.682 114.267C320.506 114.642 320.667 115.088 321.042 115.264C321.417 115.441 321.864 115.279 322.04 114.904L320.682 114.267ZM320.94 117.775C321.062 117.379 320.84 116.96 320.444 116.838C320.048 116.716 319.628 116.938 319.506 117.334L320.94 117.775ZM318.728 120.506C318.652 120.913 318.92 121.305 319.327 121.382C319.734 121.458 320.126 121.19 320.203 120.783L318.728 120.506ZM319.779 123.863C319.816 123.451 319.512 123.086 319.099 123.049C318.686 123.013 318.322 123.317 318.285 123.73L319.779 123.863ZM318.141 126.976C318.141 127.39 318.477 127.726 318.891 127.726C319.305 127.726 319.641 127.39 319.641 126.976L318.141 126.976ZM319.783 130.086C319.745 129.673 319.379 129.37 318.967 129.408C318.554 129.446 318.251 129.811 318.289 130.224L319.783 130.086ZM318.758 133.453C318.841 133.859 319.237 134.121 319.643 134.039C320.048 133.956 320.31 133.56 320.228 133.154L318.758 133.453ZM321.055 136.099C320.908 135.711 320.475 135.516 320.088 135.663C319.7 135.809 319.505 136.242 319.652 136.63L321.055 136.099ZM320.951 139.417C321.117 139.797 321.559 139.97 321.939 139.804C322.318 139.638 322.491 139.195 322.325 138.816L320.951 139.417ZM323.383 141.601C323.252 141.208 322.827 140.996 322.434 141.128C322.041 141.26 321.83 141.685 321.961 142.077L323.383 141.601ZM322.797 144.826C322.908 145.225 323.321 145.459 323.72 145.348C324.119 145.238 324.353 144.825 324.243 144.425L322.797 144.826ZM324.97 147.276C324.875 146.873 324.472 146.623 324.069 146.717C323.665 146.812 323.415 147.216 323.51 147.619L324.97 147.276ZM324.124 150.442C324.206 150.848 324.601 151.111 325.008 151.03C325.414 150.948 325.677 150.553 325.595 150.147L324.124 150.442ZM326.131 153.031C326.061 152.623 325.674 152.349 325.265 152.419C324.857 152.489 324.583 152.876 324.653 153.284L326.131 153.031ZM325.102 156.143C325.161 156.553 325.541 156.837 325.951 156.778C326.361 156.719 326.646 156.339 326.587 155.929L325.102 156.143ZM326.966 158.835C326.918 158.424 326.545 158.13 326.134 158.178C325.722 158.226 325.428 158.599 325.476 159.01L326.966 158.835ZM325.778 161.888C325.816 162.301 326.181 162.604 326.593 162.566C327.006 162.528 327.31 162.163 327.272 161.751L325.778 161.888ZM327.503 164.674C327.476 164.26 327.118 163.948 326.705 163.975C326.292 164.003 325.979 164.36 326.007 164.773L327.503 164.674ZM326.161 167.663C326.178 168.076 326.527 168.398 326.941 168.382C327.355 168.365 327.677 168.016 327.66 167.602L326.161 167.663ZM327.74 170.533C327.734 170.119 327.394 169.788 326.98 169.794C326.565 169.8 326.234 170.14 326.24 170.554L327.74 170.533ZM242.144 73.6889C242.588 73.602 243.082 73.5154 243.619 73.432L243.388 71.9497C242.834 72.0359 242.321 72.1258 241.856 72.2169L242.144 73.6889ZM246.616 73.0561C247.562 72.9631 248.575 72.8859 249.638 72.8323L249.562 71.3342C248.475 71.389 247.439 71.468 246.47 71.5633L246.616 73.0561ZM252.664 72.7504C253.651 72.7469 254.663 72.7664 255.689 72.8137L255.758 71.3153C254.705 71.2667 253.669 71.2468 252.659 71.2504L252.664 72.7504ZM258.703 73.0339C259.699 73.1348 260.698 73.2654 261.692 73.4296L261.936 71.9497C260.91 71.7799 259.879 71.6454 258.854 71.5416L258.703 73.0339ZM264.639 74.0263C265.618 74.2637 266.58 74.5391 267.517 74.8568L267.999 73.4363C267.016 73.103 266.01 72.8154 264.992 72.5686L264.639 74.0263ZM270.285 75.9606C270.736 76.1707 271.178 76.393 271.609 76.628L272.327 75.3111C271.867 75.0602 271.397 74.8237 270.918 74.6008L270.285 75.9606ZM271.609 76.628C271.997 76.8398 272.41 77.0649 272.844 77.3023L273.563 75.9861C273.129 75.7484 272.716 75.5231 272.327 75.3111L271.609 76.628ZM275.329 78.6631C276.115 79.0937 276.946 79.5497 277.815 80.0272L278.537 78.7125C277.668 78.2348 276.836 77.7786 276.05 77.3478L275.329 78.6631ZM280.3 81.393C281.106 81.8365 281.936 82.2933 282.786 82.7611L283.51 81.4471C282.66 80.9792 281.829 80.5222 281.023 80.0786L280.3 81.393ZM285.269 84.1286C286.085 84.5778 286.913 85.0344 287.751 85.4964L288.475 84.1828C287.637 83.7208 286.809 83.2641 285.993 82.8148L285.269 84.1286ZM290.236 86.8665C291.058 87.3201 291.886 87.777 292.717 88.2353L293.442 86.9219C292.611 86.4636 291.783 86.0067 290.96 85.553L290.236 86.8665ZM295.199 89.6054C296.028 90.0631 296.857 90.5206 297.681 90.976L298.407 89.6629C297.582 89.2075 296.753 88.75 295.924 88.2922L295.199 89.6054ZM300.163 92.3466C300.999 92.8083 301.827 93.266 302.645 93.7179L303.37 92.405C302.552 91.9531 301.724 91.4953 300.888 91.0336L300.163 92.3466ZM305.127 95.09C305.97 95.5561 306.798 96.0135 307.605 96.4599L308.331 95.1472C307.524 94.7008 306.696 94.2434 305.853 93.7772L305.127 95.09ZM310.088 97.8329C310.948 98.3089 311.778 98.7678 312.57 99.2063L313.296 97.8938C312.504 97.4553 311.674 96.9963 310.814 96.5203L310.088 97.8329ZM315.049 100.578C315.477 100.815 315.889 101.043 316.284 101.262L317.011 99.9496C316.616 99.731 316.204 99.5028 315.775 99.2657L315.049 100.578ZM316.305 101.273C316.632 101.441 316.988 101.644 317.358 101.881L318.166 100.617C317.757 100.356 317.361 100.129 316.99 99.9383L316.305 101.273ZM319.305 103.368C319.896 103.905 320.455 104.506 320.933 105.162L322.145 104.278C321.598 103.527 320.967 102.851 320.314 102.258L319.305 103.368ZM322.058 107.235C322.317 107.951 322.457 108.704 322.44 109.491L323.94 109.523C323.961 108.534 323.784 107.596 323.469 106.725L322.058 107.235ZM321.966 111.738C321.827 112.084 321.656 112.438 321.447 112.8L322.745 113.55C322.989 113.13 323.192 112.711 323.359 112.295L321.966 111.738ZM321.447 112.8C321.173 113.274 320.918 113.764 320.682 114.267L322.04 114.904C322.259 114.438 322.494 113.986 322.745 113.55L321.447 112.8ZM319.506 117.334C319.188 118.367 318.931 119.43 318.728 120.506L320.203 120.783C320.395 119.758 320.64 118.75 320.94 117.775L319.506 117.334ZM318.285 123.73C318.187 124.82 318.141 125.908 318.141 126.976L319.641 126.976C319.641 125.951 319.686 124.908 319.779 123.863L318.285 123.73ZM318.289 130.224C318.393 131.354 318.551 132.438 318.758 133.453L320.228 133.154C320.033 132.197 319.882 131.166 319.783 130.086L318.289 130.224ZM319.652 136.63C319.862 137.185 320.094 137.702 320.347 138.169L321.666 137.454C321.45 137.055 321.245 136.602 321.055 136.099L319.652 136.63ZM320.347 138.169C320.543 138.53 320.745 138.947 320.951 139.417L322.325 138.816C322.106 138.315 321.886 137.859 321.666 137.454L320.347 138.169ZM321.961 142.077C322.243 142.917 322.523 143.836 322.797 144.826L324.243 144.425C323.962 143.413 323.674 142.468 323.383 141.601L321.961 142.077ZM323.51 147.619C323.722 148.521 323.928 149.463 324.124 150.442L325.595 150.147C325.395 149.152 325.186 148.194 324.97 147.276L323.51 147.619ZM324.653 153.284C324.812 154.213 324.962 155.167 325.102 156.143L326.587 155.929C326.445 154.94 326.292 153.973 326.131 153.031L324.653 153.284ZM325.476 159.01C325.587 159.954 325.688 160.915 325.778 161.888L327.272 161.751C327.181 160.764 327.079 159.792 326.966 158.835L325.476 159.01ZM326.007 164.773C326.07 165.727 326.122 166.691 326.161 167.663L327.66 167.602C327.62 166.617 327.567 165.64 327.503 164.674L326.007 164.773Z"
      />
    </svg>
  );
};

export default JaguarSlopPath;