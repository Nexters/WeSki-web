import React from 'react';
import { cn } from '@/shared/lib';

const DragonSlopPath = ({ color }: { color?: string }) => {
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
        d="M100.08 25.2457C100.492 25.2016 100.79 24.832 100.746 24.4201C100.702 24.0082 100.332 23.7101 99.9201 23.7543L100.08 25.2457ZM71.9999 34L71.8106 34.7257L71.9999 34ZM86 46L85.7682 45.2867L86 46ZM70 57.5L70.1091 56.758L70 57.5ZM88.5 68L88.0589 67.3934L88.5 68ZM53.5 107.5L60.7597 102.778L53.0405 98.8519L53.5 107.5ZM54.825 106.549C55.0214 106.184 54.8848 105.729 54.5201 105.533C54.1554 105.337 53.7005 105.473 53.5042 105.838L54.825 106.549ZM55.0161 103.251C54.7966 103.602 54.9034 104.065 55.2547 104.284C55.6059 104.504 56.0686 104.397 56.2881 104.045L55.0161 103.251ZM57.8898 101.605C58.1239 101.263 58.0366 100.797 57.6949 100.563C57.3531 100.328 56.8864 100.416 56.6523 100.757L57.8898 101.605ZM58.3719 98.3316C58.1274 98.666 58.2003 99.1353 58.5346 99.3798C58.869 99.6243 59.3382 99.5514 59.5827 99.217L58.3719 98.3316ZM61.3444 96.8705C61.597 96.5422 61.5356 96.0713 61.2073 95.8187C60.879 95.5662 60.4081 95.6276 60.1555 95.9559L61.3444 96.8705ZM61.9884 93.6243C61.7291 93.9474 61.7809 94.4194 62.104 94.6786C62.4271 94.9378 62.8992 94.886 63.1584 94.563L61.9884 93.6243ZM65.0155 92.2906C65.2804 91.9721 65.2371 91.4992 64.9186 91.2343C64.6002 90.9694 64.1273 91.0128 63.8624 91.3312L65.0155 92.2906ZM65.7767 89.0682C65.5067 89.3823 65.5424 89.8558 65.8565 90.1258C66.1706 90.3958 66.6441 90.3601 66.9142 90.046L65.7767 89.0682ZM68.8459 87.8332C69.1207 87.5232 69.0921 87.0492 68.7821 86.7744C68.4721 86.4997 67.9981 86.5283 67.7234 86.8383L68.8459 87.8332ZM69.7038 84.6365C69.4245 84.9425 69.4462 85.4168 69.7521 85.6961C70.058 85.9753 70.5324 85.9537 70.8117 85.6477L69.7038 84.6365ZM72.8087 83.4914C73.0924 83.1896 73.0776 82.7149 72.7758 82.4313C72.474 82.1476 71.9993 82.1624 71.7156 82.4642L72.8087 83.4914ZM73.7597 80.3211C73.4716 80.6187 73.4793 81.0935 73.7768 81.3816C74.0744 81.6698 74.5492 81.6621 74.8374 81.3645L73.7597 80.3211ZM76.8965 79.2706C77.1893 78.9776 77.1891 78.5028 76.8961 78.21C76.6031 77.9172 76.1282 77.9174 75.8354 78.2104L76.8965 79.2706ZM77.9491 76.1305C77.6514 76.4184 77.6434 76.8932 77.9313 77.191C78.2192 77.4888 78.694 77.4968 78.9918 77.2089L77.9491 76.1305ZM81.1202 75.1898C81.4236 74.9078 81.4408 74.4332 81.1588 74.1299C80.8767 73.8265 80.4022 73.8092 80.0988 74.0913L81.1202 75.1898ZM82.2921 72.0975C81.9822 72.3725 81.954 72.8465 82.2289 73.1563C82.5038 73.4661 82.9778 73.4944 83.2877 73.2195L82.2921 72.0975ZM85.5066 71.3054C85.8244 71.0397 85.8666 70.5667 85.6009 70.249C85.3352 69.9312 84.8622 69.889 84.5445 70.1547L85.5066 71.3054ZM86.8654 68.2876C86.5372 68.5402 86.476 69.0112 86.7286 69.3394C86.9813 69.6676 87.4522 69.7288 87.7804 69.4761L86.8654 68.2876ZM90.1595 67.6579C90.4765 67.3913 90.5173 66.9182 90.2506 66.6012C89.984 66.2842 89.5109 66.2434 89.1939 66.5101L90.1595 67.6579ZM90.9968 64.5346C90.7913 64.8943 90.9163 65.3524 91.2759 65.5579C91.6356 65.7634 92.0937 65.6384 92.2992 65.2787L90.9968 64.5346ZM91.9873 61.6868C91.7037 61.3849 91.229 61.3701 90.9271 61.6537C90.6252 61.9373 90.6104 62.412 90.894 62.7139L91.9873 61.6868ZM88.6405 61.4279C89.0287 61.5724 89.4605 61.3748 89.6049 60.9866C89.7494 60.5984 89.5518 60.1665 89.1636 60.0221L88.6405 61.4279ZM86.2389 59.1721C85.8355 59.0783 85.4324 59.3293 85.3386 59.7328C85.2448 60.1362 85.4958 60.5393 85.8992 60.6331L86.2389 59.1721ZM83.04 60.0637C83.4482 60.1344 83.8363 59.8608 83.907 59.4527C83.9776 59.0445 83.704 58.6564 83.2959 58.5857L83.04 60.0637ZM80.3587 58.1255C79.9486 58.0666 79.5685 58.3513 79.5097 58.7613C79.4508 59.1713 79.7354 59.5514 80.1455 59.6103L80.3587 58.1255ZM77.2251 59.2138C77.6359 59.2673 78.0122 58.9776 78.0656 58.5669C78.119 58.1561 77.8294 57.7798 77.4186 57.7264L77.2251 59.2138ZM74.4863 57.3501C74.0755 57.2974 73.6997 57.5878 73.647 57.9986C73.5943 58.4094 73.8846 58.7852 74.2954 58.8379L74.4863 57.3501ZM71.3588 58.4505C71.7691 58.5069 72.1476 58.22 72.204 57.8097C72.2605 57.3993 71.9736 57.0209 71.5632 56.9645L71.3588 58.4505ZM68.7047 56.5402C68.296 56.4731 67.9103 56.7502 67.8432 57.1589C67.7762 57.5677 68.0532 57.9534 68.4619 58.0204L68.7047 56.5402ZM65.6037 57.4757C66.0077 57.5672 66.4093 57.3139 66.5008 56.9099C66.5923 56.5059 66.339 56.1043 65.935 56.0128L65.6037 57.4757ZM63.3802 55.2165C63.0088 55.0331 62.559 55.1856 62.3757 55.557C62.1923 55.9284 62.3448 56.3782 62.7162 56.5615L63.3802 55.2165ZM62.6326 53.2195C62.2863 53.4467 62.1897 53.9117 62.4169 54.258C62.6441 54.6044 63.1091 54.7009 63.4554 54.4737L62.6326 53.2195ZM65.8918 53.2985C66.2764 53.1446 66.4633 52.7081 66.3093 52.3235C66.1554 51.939 65.7188 51.7521 65.3343 51.906L65.8918 53.2985ZM68.044 50.9101C67.6524 51.0449 67.4442 51.4717 67.5791 51.8634C67.7139 52.255 68.1407 52.4632 68.5324 52.3283L68.044 50.9101ZM71.2337 51.4325C71.628 51.3056 71.8447 50.883 71.7177 50.4887C71.5907 50.0945 71.1681 49.8778 70.7739 50.0048L71.2337 51.4325ZM73.5035 49.1403C73.1082 49.264 72.8879 49.6847 73.0116 50.08C73.1352 50.4753 73.5559 50.6956 73.9512 50.5719L73.5035 49.1403ZM76.6766 49.7245C77.0723 49.6018 77.2936 49.1817 77.171 48.7861C77.0483 48.3904 76.6282 48.1691 76.2325 48.2917L76.6766 49.7245ZM78.9641 47.444C78.5686 47.5671 78.3478 47.9875 78.4709 48.383C78.5939 48.7785 79.0143 48.9994 79.4098 48.8763L78.9641 47.444ZM82.1386 48.0221C82.5337 47.8976 82.753 47.4764 82.6285 47.0814C82.504 46.6863 82.0828 46.467 81.6877 46.5915L82.1386 48.0221ZM84.4067 45.7266C84.0124 45.8533 83.7954 46.2757 83.9221 46.6701C84.0488 47.0645 84.4712 47.2814 84.8656 47.1547L84.4067 45.7266ZM87.681 46.2281C88.0725 46.0929 88.2802 45.6658 88.145 45.2743C88.0097 44.8828 87.5827 44.6751 87.1912 44.8103L87.681 46.2281ZM89.9348 43.7861C89.5513 43.9427 89.3674 44.3805 89.5239 44.764C89.6805 45.1474 90.1183 45.3314 90.5018 45.1749L89.9348 43.7861ZM93.2738 43.8739C93.6354 43.6719 93.7649 43.215 93.5629 42.8534C93.3609 42.4917 92.904 42.3623 92.5424 42.5643L93.2738 43.8739ZM94.4324 41.0105C94.2622 41.3881 94.4305 41.8322 94.8082 42.0023C95.1858 42.1725 95.6299 42.0042 95.8 41.6266L94.4324 41.0105ZM94.0169 38.4212C93.65 38.2291 93.1967 38.3707 93.0046 38.7377C92.8124 39.1046 92.9541 39.5579 93.321 39.75L94.0169 38.4212ZM90.6734 38.7402C91.0702 38.8592 91.4883 38.634 91.6072 38.2373C91.7262 37.8405 91.501 37.4224 91.1043 37.3034L90.6734 38.7402ZM88.1886 36.543C87.785 36.4496 87.3821 36.7009 87.2887 37.1044C87.1952 37.508 87.4466 37.9109 87.8501 38.0043L88.1886 36.543ZM84.9607 37.3848C85.3668 37.4665 85.7621 37.2035 85.8438 36.7974C85.9255 36.3914 85.6625 35.996 85.2564 35.9143L84.9607 37.3848ZM82.3278 35.3474C81.9208 35.2707 81.5286 35.5385 81.452 35.9456C81.3753 36.3526 81.6431 36.7448 82.0502 36.8214L82.3278 35.3474ZM79.1278 36.2745C79.5349 36.351 79.927 36.083 80.0035 35.6759C80.08 35.2688 79.812 34.8768 79.4049 34.8003L79.1278 36.2745ZM76.4921 34.2386C76.0859 34.1572 75.6908 34.4206 75.6095 34.8267C75.5282 35.2329 75.7915 35.6281 76.1977 35.7094L76.4921 34.2386ZM73.2678 35.083C73.6714 35.1765 74.0743 34.9252 74.1678 34.5217C74.2613 34.1182 74.01 33.7153 73.6065 33.6218L73.2678 35.083ZM70.7837 32.8397C70.3957 32.6947 69.9636 32.8918 69.8187 33.2798C69.6738 33.6679 69.8708 34.0999 70.2588 34.2448L70.7837 32.8397ZM67.9859 31.1981C67.8007 31.5686 67.951 32.0191 68.3215 32.2043C68.692 32.3894 69.1425 32.2392 69.3277 31.8686L67.9859 31.1981ZM71.4642 30.5088C71.8461 30.3486 72.0259 29.909 71.8656 29.5271C71.7054 29.1451 71.2658 28.9654 70.8839 29.1256L71.4642 30.5088ZM73.8854 28.0901C73.4879 28.2064 73.2599 28.6229 73.3761 29.0205C73.4924 29.4181 73.909 29.6461 74.3065 29.5298L73.8854 28.0901ZM77.2504 28.7605C77.6536 28.6654 77.9033 28.2615 77.8082 27.8584C77.7131 27.4552 77.3092 27.2055 76.9061 27.3006L77.2504 28.7605ZM79.952 26.6386C79.5459 26.7203 79.283 27.1157 79.3647 27.5218C79.4463 27.9279 79.8418 28.1909 80.2478 28.1092L79.952 26.6386ZM83.2703 27.5399C83.6782 27.4678 83.9504 27.0787 83.8782 26.6708C83.8061 26.2629 83.417 25.9907 83.0091 26.0628L83.2703 27.5399ZM86.0837 25.5489C85.6746 25.6136 85.3954 25.9978 85.4602 26.4069C85.5249 26.816 85.909 27.0952 86.3182 27.0305L86.0837 25.5489ZM89.3527 26.5735C89.7627 26.5146 90.0474 26.1346 89.9886 25.7246C89.9297 25.3145 89.5497 25.0298 89.1397 25.0887L89.3527 26.5735ZM92.2195 24.6664C91.8088 24.7203 91.5195 25.0968 91.5733 25.5075C91.6272 25.9182 92.0037 26.2075 92.4144 26.1537L92.2195 24.6664ZM95.4734 25.7692C95.8846 25.7196 96.1778 25.3461 96.1282 24.9348C96.0786 24.5236 95.7051 24.2304 95.2938 24.28L95.4734 25.7692ZM98.367 23.9239C97.9553 23.9698 97.6588 24.3407 97.7046 24.7523C97.7505 25.164 98.1213 25.4606 98.533 25.4147L98.367 23.9239ZM56.2881 104.045C56.7772 103.263 57.3128 102.447 57.8898 101.605L56.6523 100.757C56.065 101.615 55.5177 102.448 55.0161 103.251L56.2881 104.045ZM59.5827 99.217C60.1443 98.4491 60.7327 97.6656 61.3444 96.8705L60.1555 95.9559C59.537 96.7599 58.9412 97.5532 58.3719 98.3316L59.5827 99.217ZM63.1584 94.563C63.7615 93.8111 64.3815 93.0526 65.0155 92.2906L63.8624 91.3312C63.223 92.0998 62.5973 92.8652 61.9884 93.6243L63.1584 94.563ZM66.9142 90.046C67.5486 89.3079 68.1934 88.5694 68.8459 87.8332L67.7234 86.8383C67.0659 87.5801 66.4162 88.3243 65.7767 89.0682L66.9142 90.046ZM70.8117 85.6477C71.4731 84.9231 72.1396 84.2034 72.8087 83.4914L71.7156 82.4642C71.0415 83.1815 70.3701 83.9065 69.7038 84.6365L70.8117 85.6477ZM74.8374 81.3645C75.5246 80.6547 76.2119 79.9558 76.8965 79.2706L75.8354 78.2104C75.1451 78.9013 74.4523 79.6058 73.7597 80.3211L74.8374 81.3645ZM78.9918 77.2089C79.7086 76.5159 80.4191 75.8417 81.1202 75.1898L80.0988 74.0913C79.3902 74.7502 78.6725 75.4311 77.9491 76.1305L78.9918 77.2089ZM83.2877 73.2195C84.0451 72.5474 84.7862 71.9078 85.5066 71.3054L84.5445 70.1547C83.8117 70.7674 83.0594 71.4166 82.2921 72.0975L83.2877 73.2195ZM87.7804 69.4761C88.1769 69.1709 88.5641 68.8807 88.9411 68.6066L88.0589 67.3934C87.6699 67.6763 87.2718 67.9747 86.8654 68.2876L87.7804 69.4761ZM88.9411 68.6066C89.3887 68.281 89.7944 67.965 90.1595 67.6579L89.1939 66.5101C88.8595 66.7913 88.4821 67.0857 88.0589 67.3934L88.9411 68.6066ZM92.2992 65.2787C92.6627 64.6424 92.8437 63.9962 92.783 63.3539C92.7218 62.7061 92.423 62.1507 91.9873 61.6868L90.894 62.7139C91.1519 62.9884 91.266 63.245 91.2896 63.4951C91.3138 63.7508 91.2516 64.0885 90.9968 64.5346L92.2992 65.2787ZM89.1636 60.0221C88.3015 59.7013 87.3127 59.4217 86.2389 59.1721L85.8992 60.6331C86.9349 60.8739 87.8577 61.1366 88.6405 61.4279L89.1636 60.0221ZM83.2959 58.5857C82.3517 58.4222 81.3668 58.2703 80.3587 58.1255L80.1455 59.6103C81.144 59.7537 82.114 59.9034 83.04 60.0637L83.2959 58.5857ZM77.4186 57.7264C76.4455 57.5997 75.4616 57.4753 74.4863 57.3501L74.2954 58.8379C75.2744 58.9635 76.2535 59.0874 77.2251 59.2138L77.4186 57.7264ZM71.5632 56.9645C71.0727 56.897 70.5874 56.8283 70.1091 56.758L69.8909 58.242C70.3746 58.3132 70.8646 58.3825 71.3588 58.4505L71.5632 56.9645ZM70.1091 56.758C69.615 56.6853 69.1471 56.6128 68.7047 56.5402L68.4619 58.0204C68.9133 58.0945 69.3895 58.1683 69.8909 58.242L70.1091 56.758ZM65.935 56.0128C64.7223 55.7382 63.8942 55.4703 63.3802 55.2165L62.7162 56.5615C63.3909 56.8946 64.3567 57.1933 65.6037 57.4757L65.935 56.0128ZM63.4554 54.4737C63.9825 54.1279 64.7953 53.7375 65.8918 53.2985L65.3343 51.906C64.2133 52.3548 63.2881 52.7896 62.6326 53.2195L63.4554 54.4737ZM68.5324 52.3283C69.361 52.0431 70.2637 51.745 71.2337 51.4325L70.7739 50.0048C69.7978 50.3191 68.885 50.6205 68.044 50.9101L68.5324 52.3283ZM73.9512 50.5719C74.8226 50.2994 75.7322 50.0173 76.6766 49.7245L76.2325 48.2917C75.2881 48.5845 74.3769 48.8672 73.5035 49.1403L73.9512 50.5719ZM79.4098 48.8763C80.2965 48.6004 81.207 48.3158 82.1386 48.0221L81.6877 46.5915C80.7583 46.8845 79.8496 47.1685 78.9641 47.444L79.4098 48.8763ZM84.8656 47.1547C85.3171 47.0097 85.7726 46.8625 86.2318 46.7133L85.7682 45.2867C85.3106 45.4354 84.8567 45.582 84.4067 45.7266L84.8656 47.1547ZM86.2318 46.7133C86.7376 46.5489 87.2204 46.3872 87.681 46.2281L87.1912 44.8103C86.74 44.9662 86.2659 45.125 85.7682 45.2867L86.2318 46.7133ZM90.5018 45.1749C91.6073 44.7235 92.527 44.291 93.2738 43.8739L92.5424 42.5643C91.864 42.9432 91.0029 43.3501 89.9348 43.7861L90.5018 45.1749ZM95.8 41.6266C96.1065 40.9462 96.013 40.2736 95.6195 39.7012C95.2619 39.1811 94.6761 38.7664 94.0169 38.4212L93.321 39.75C93.902 40.0543 94.2316 40.3301 94.3835 40.5511C94.4995 40.7199 94.5096 40.8389 94.4324 41.0105L95.8 41.6266ZM91.1043 37.3034C90.2144 37.0366 89.231 36.7845 88.1886 36.543L87.8501 38.0043C88.8729 38.2413 89.8236 38.4854 90.6734 38.7402L91.1043 37.3034ZM85.2564 35.9143C84.299 35.7217 83.3159 35.5335 82.3278 35.3474L82.0502 36.8214C83.0358 37.0071 84.012 37.1941 84.9607 37.3848L85.2564 35.9143ZM79.4049 34.8003C78.4133 34.6139 77.4362 34.4275 76.4921 34.2386L76.1977 35.7094C77.1504 35.9001 78.1342 36.0877 79.1278 36.2745L79.4049 34.8003ZM73.6065 33.6218C73.1134 33.5075 72.6398 33.3918 72.1892 33.2743L71.8106 34.7257C72.2768 34.8473 72.7639 34.9663 73.2678 35.083L73.6065 33.6218ZM72.1892 33.2743C71.6464 33.1327 71.1787 32.9872 70.7837 32.8397L70.2588 34.2448C70.7124 34.4143 71.2306 34.5744 71.8106 34.7257L72.1892 33.2743ZM69.3277 31.8686C69.3826 31.7587 69.5412 31.5647 69.9152 31.3091C70.2782 31.061 70.789 30.7921 71.4642 30.5088L70.8839 29.1256C70.1551 29.4314 69.5448 29.7454 69.0689 30.0706C68.604 30.3883 68.2059 30.7579 67.9859 31.1981L69.3277 31.8686ZM74.3065 29.5298C75.1789 29.2746 76.1599 29.0177 77.2504 28.7605L76.9061 27.3006C75.7946 27.5627 74.7875 27.8262 73.8854 28.0901L74.3065 29.5298ZM80.2478 28.1092C81.1955 27.9186 82.2029 27.7286 83.2703 27.5399L83.0091 26.0628C81.9312 26.2534 80.9122 26.4455 79.952 26.6386L80.2478 28.1092ZM86.3182 27.0305C87.2889 26.8768 88.3004 26.7244 89.3527 26.5735L89.1397 25.0887C88.0807 25.2406 87.062 25.3941 86.0837 25.5489L86.3182 27.0305ZM92.4144 26.1537C93.4028 26.0241 94.4225 25.8959 95.4734 25.7692L95.2938 24.28C94.238 24.4073 93.2132 24.5361 92.2195 24.6664L92.4144 26.1537ZM98.533 25.4147C99.0421 25.358 99.5577 25.3017 100.08 25.2457L99.9201 23.7543C99.3959 23.8104 98.8781 23.867 98.367 23.9239L98.533 25.4147Z"
      />
    </svg>
  );
};

export default DragonSlopPath;
