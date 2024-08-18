import React from 'react';
import { cn } from '@/shared/lib';

const GoldFantasticPath = ({ color }: { color?: string }) => {
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
        d="M114.499 65.25C114.914 65.25 115.249 64.9142 115.249 64.5C115.249 64.0858 114.914 63.75 114.499 63.75V65.25ZM102.499 77L103.165 77.346L102.499 77ZM74.5 134L70.5242 126.306L65.8492 133.596L74.5 134ZM73.72 132.609C73.3711 132.386 72.9073 132.488 72.6841 132.837C72.4609 133.185 72.5629 133.649 72.9118 133.872L73.72 132.609ZM70.5423 132.368C70.8928 132.588 71.3559 132.483 71.5766 132.132C71.7972 131.782 71.692 131.319 71.3415 131.098L70.5423 132.368ZM68.9462 129.613C68.5921 129.398 68.1308 129.51 67.9158 129.864C67.7008 130.218 67.8136 130.68 68.1676 130.895L68.9462 129.613ZM65.796 129.542C66.1682 129.724 66.6173 129.57 66.7991 129.197C66.981 128.825 66.8267 128.376 66.4545 128.194L65.796 129.542ZM63.9671 127.05C63.6079 126.843 63.1495 126.967 62.9432 127.326C62.7369 127.686 62.8608 128.144 63.22 128.35L63.9671 127.05ZM60.8036 126.89C61.1552 127.109 61.6177 127.001 61.8367 126.65C62.0556 126.298 61.9479 125.835 61.5963 125.617L60.8036 126.89ZM58.9849 123.928C58.6454 123.69 58.1778 123.773 57.9406 124.113C57.7034 124.452 57.7863 124.92 58.1259 125.157L58.9849 123.928ZM55.3454 122.934C55.6474 123.218 56.122 123.203 56.4055 122.901C56.689 122.599 56.6741 122.124 56.3721 121.841L55.3454 122.934ZM54.3521 119.362C54.1547 118.998 53.6995 118.863 53.3354 119.06C52.9712 119.257 52.836 119.713 53.0334 120.077L54.3521 119.362ZM52.5104 116.168C52.3863 116.563 52.6061 116.984 53.0013 117.108C53.3965 117.232 53.8175 117.012 53.9415 116.617L52.5104 116.168ZM55.7869 114.34C56.1212 114.095 56.194 113.626 55.9494 113.291C55.7048 112.957 55.2356 112.884 54.9013 113.129L55.7869 114.34ZM58.0932 111.406C57.7101 111.563 57.5273 112.002 57.6848 112.385C57.8423 112.768 58.2806 112.951 58.6637 112.793L58.0932 111.406ZM61.6891 111.691C62.0756 111.542 62.2683 111.108 62.1194 110.722C61.9706 110.335 61.5366 110.142 61.15 110.291L61.6891 111.691ZM63.8189 109.093C63.4517 109.285 63.3096 109.738 63.5014 110.105C63.6933 110.472 64.1464 110.614 64.5135 110.423L63.8189 109.093ZM67.1683 108.794C67.5048 108.552 67.5817 108.083 67.34 107.747C67.0984 107.41 66.6298 107.334 66.2934 107.575L67.1683 108.794ZM68.5107 105.713C68.2144 106.002 68.2088 106.477 68.4982 106.773C68.7876 107.07 69.2624 107.075 69.5588 106.786L68.5107 105.713ZM71.6291 104.468C71.8851 104.143 71.8286 103.671 71.503 103.415C71.1773 103.159 70.7058 103.215 70.4498 103.541L71.6291 104.468ZM72.1503 101.141C71.9256 101.489 72.0255 101.953 72.3734 102.178C72.7213 102.403 73.1856 102.303 73.4103 101.955L72.1503 101.141ZM74.9884 99.3416C75.1937 98.9818 75.0685 98.5237 74.7088 98.3184C74.349 98.1131 73.8909 98.2383 73.6856 98.5981L74.9884 99.3416ZM75.1295 95.9769C74.9337 96.3419 75.0709 96.7966 75.4359 96.9924C75.8009 97.1882 76.2555 97.051 76.4513 96.686L75.1295 95.9769ZM77.9729 94.097C78.2272 93.7701 78.1684 93.2989 77.8415 93.0445C77.5146 92.7902 77.0434 92.8489 76.789 93.1759L77.9729 94.097ZM79.3207 90.8167C78.9806 91.0531 78.8965 91.5205 79.1329 91.8606C79.3693 92.2007 79.8366 92.2848 80.1768 92.0485L79.3207 90.8167ZM82.8955 90.5375C83.2722 90.3654 83.4381 89.9205 83.266 89.5437C83.0939 89.167 82.6489 89.0011 82.2722 89.1732L82.8955 90.5375ZM85.3359 87.9354C84.9473 88.0787 84.7484 88.5099 84.8917 88.8985C85.0351 89.2872 85.4663 89.486 85.8549 89.3427L85.3359 87.9354ZM88.9092 88.2401C89.2983 88.0981 89.4987 87.6675 89.3567 87.2784C89.2147 86.8893 88.7842 86.689 88.3951 86.8309L88.9092 88.2401ZM91.3849 85.665C91.0038 85.8273 90.8264 86.2678 90.9887 86.6489C91.151 87.03 91.5915 87.2074 91.9726 87.0451L91.3849 85.665ZM94.9657 85.5988C95.3281 85.3983 95.4593 84.9419 95.2587 84.5795C95.0581 84.2171 94.6017 84.0859 94.2393 84.2864L94.9657 85.5988ZM96.8693 82.5795C96.5402 82.8311 96.4773 83.3018 96.7288 83.6309C96.9804 83.96 97.451 84.0228 97.7801 83.7713L96.8693 82.5795ZM100.276 81.496C100.556 81.1908 100.535 80.7163 100.23 80.4364C99.9247 80.1564 99.4503 80.1769 99.1703 80.4822L100.276 81.496ZM101.055 78.0124C100.834 78.3626 100.938 78.8258 101.289 79.0469C101.639 79.268 102.102 79.1633 102.323 78.8131L101.055 78.0124ZM103.862 76.0472C104.063 75.6849 103.932 75.2284 103.57 75.0276C103.208 74.8267 102.751 74.9575 102.55 75.3198L103.862 76.0472ZM104.096 72.7198C103.873 73.0688 103.975 73.5326 104.324 73.7556C104.673 73.9786 105.137 73.8764 105.36 73.5273L104.096 72.7198ZM107.022 71.1291C107.272 70.7987 107.207 70.3283 106.876 70.0786C106.546 69.8288 106.075 69.8942 105.826 70.2247L107.022 71.1291ZM107.788 67.8805C107.505 68.183 107.521 68.6576 107.823 68.9406C108.125 69.2236 108.6 69.2078 108.883 68.9053L107.788 67.8805ZM110.978 66.9609C111.304 66.7051 111.361 66.2336 111.105 65.9078C110.849 65.582 110.378 65.5253 110.052 65.781L110.978 66.9609ZM112.779 64.139C112.395 64.2934 112.209 64.7302 112.363 65.1145C112.517 65.4989 112.954 65.6853 113.338 65.531L112.779 64.139ZM71.3415 131.098C70.3753 130.49 69.5898 130.003 68.9462 129.613L68.1676 130.895C68.8025 131.28 69.5807 131.762 70.5423 132.368L71.3415 131.098ZM66.4545 128.194C65.9149 127.931 65.6465 127.865 65.4072 127.778C65.1755 127.694 64.8311 127.546 63.9671 127.05L63.22 128.35C64.117 128.866 64.5462 129.061 64.894 129.188C65.2342 129.312 65.3511 129.325 65.796 129.542L66.4545 128.194ZM61.5963 125.617C61.2343 125.391 60.8368 125.142 60.3998 124.866L59.5988 126.134C60.0382 126.412 60.4385 126.663 60.8036 126.89L61.5963 125.617ZM60.3998 124.866C59.8988 124.549 59.4273 124.237 58.9849 123.928L58.1259 125.157C58.5888 125.481 59.0797 125.806 59.5988 126.134L60.3998 124.866ZM56.3721 121.841C55.4281 120.955 54.7662 120.126 54.3521 119.362L53.0334 120.077C53.5457 121.022 54.3233 121.975 55.3454 122.934L56.3721 121.841ZM53.9415 116.617C54.1798 115.858 54.7627 115.089 55.7869 114.34L54.9013 113.129C53.7131 113.998 52.8745 115.008 52.5104 116.168L53.9415 116.617ZM58.6637 112.793C59.1516 112.592 59.6759 112.398 60.2365 112.212L59.7621 110.788C59.1725 110.985 58.6159 111.191 58.0932 111.406L58.6637 112.793ZM60.2365 112.212C60.7377 112.044 61.2215 111.871 61.6891 111.691L61.15 110.291C60.7048 110.463 60.2427 110.628 59.7621 110.788L60.2365 112.212ZM64.5135 110.423C65.4724 109.922 66.3521 109.38 67.1683 108.794L66.2934 107.575C65.5367 108.119 64.7175 108.624 63.8189 109.093L64.5135 110.423ZM69.5588 106.786C70.2978 106.064 70.9812 105.292 71.6291 104.468L70.4498 103.541C69.8377 104.32 69.1977 105.042 68.5107 105.713L69.5588 106.786ZM73.4103 101.955C73.9441 101.128 74.4655 100.258 74.9884 99.3416L73.6856 98.5981C73.1725 99.4972 72.6655 100.343 72.1503 101.141L73.4103 101.955ZM76.4513 96.686C76.685 96.2504 76.9216 95.8053 77.1622 95.3509L75.8365 94.6491C75.5967 95.1021 75.3614 95.5445 75.1295 95.9769L76.4513 96.686ZM77.1622 95.3509C77.4014 94.899 77.6727 94.4828 77.9729 94.097L76.789 93.1759C76.4362 93.6292 76.1173 94.1187 75.8365 94.6491L77.1622 95.3509ZM80.1768 92.0485C80.9918 91.482 81.904 90.9905 82.8955 90.5375L82.2722 89.1732C81.2267 89.6508 80.2304 90.1845 79.3207 90.8167L80.1768 92.0485ZM85.8549 89.3427C86.8579 88.9729 87.8505 88.6264 88.9092 88.2401L88.3951 86.8309C87.3812 87.2009 86.3228 87.5715 85.3359 87.9354L85.8549 89.3427ZM91.9726 87.0451C92.9778 86.617 93.9821 86.1432 94.9657 85.5988L94.2393 84.2864C93.3111 84.8002 92.3549 85.2519 91.3849 85.665L91.9726 87.0451ZM97.7801 83.7713C98.6529 83.1042 99.4901 82.3527 100.276 81.496L99.1703 80.4822C98.4485 81.2692 97.6774 81.9618 96.8693 82.5795L97.7801 83.7713ZM102.323 78.8131C102.617 78.3475 102.898 77.859 103.165 77.346L101.834 76.654C101.586 77.1303 101.326 77.5825 101.055 78.0124L102.323 78.8131ZM103.165 77.346C103.398 76.8977 103.63 76.4649 103.862 76.0472L102.55 75.3198C102.312 75.7494 102.073 76.194 101.834 76.654L103.165 77.346ZM105.36 73.5273C105.925 72.6427 106.481 71.8458 107.022 71.1291L105.826 70.2247C105.259 70.9744 104.681 71.8038 104.096 72.7198L105.36 73.5273ZM108.883 68.9053C109.63 68.1074 110.333 67.4678 110.978 66.9609L110.052 65.781C109.341 66.3394 108.582 67.0318 107.788 67.8805L108.883 68.9053ZM113.338 65.531C113.869 65.3179 114.259 65.25 114.499 65.25V63.75C114.011 63.75 113.426 63.8793 112.779 64.139L113.338 65.531Z"
      />
    </svg>
  );
};

export default GoldFantasticPath;
