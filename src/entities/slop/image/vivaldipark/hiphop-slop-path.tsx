import React from 'react';
import { cn } from '@/shared/lib';

const HiphopSlopPath = ({ color }: { color?: string }) => {
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
        d="M243 89.4993L242.255 89.587L243 89.4993ZM181 173L189.569 174.256L186.372 166.207L181 173ZM183.088 172.977C183.472 172.824 183.66 172.387 183.506 172.003C183.352 171.618 182.916 171.431 182.531 171.585L183.088 172.977ZM186.055 170.16C185.671 170.317 185.488 170.755 185.645 171.138C185.802 171.521 186.24 171.705 186.623 171.548L186.055 170.16ZM190.191 170.068C190.572 169.908 190.752 169.468 190.591 169.086C190.431 168.704 189.991 168.525 189.609 168.685L190.191 170.068ZM193.136 167.183C192.756 167.347 192.581 167.789 192.745 168.169C192.909 168.549 193.351 168.724 193.731 168.56L193.136 167.183ZM197.241 167.02C197.62 166.852 197.79 166.409 197.622 166.03C197.453 165.652 197.01 165.481 196.632 165.65L197.241 167.02ZM200.1 164.082C199.724 164.255 199.559 164.7 199.732 165.076C199.905 165.453 200.35 165.618 200.726 165.445L200.1 164.082ZM204.216 163.814C204.59 163.636 204.749 163.188 204.571 162.814C204.393 162.44 203.946 162.281 203.572 162.459L204.216 163.814ZM207.02 160.789C206.649 160.972 206.496 161.422 206.68 161.793C206.863 162.165 207.313 162.317 207.684 162.134L207.02 160.789ZM211.122 160.402C211.491 160.213 211.636 159.761 211.446 159.392C211.257 159.024 210.805 158.879 210.436 159.068L211.122 160.402ZM213.818 157.291C213.453 157.487 213.316 157.942 213.513 158.306C213.709 158.671 214.164 158.808 214.528 158.612L213.818 157.291ZM217.899 156.754C218.259 156.551 218.386 156.093 218.183 155.732C217.979 155.372 217.521 155.245 217.161 155.449L217.899 156.754ZM220.457 153.534C220.101 153.746 219.985 154.207 220.198 154.562C220.41 154.918 220.871 155.034 221.226 154.821L220.457 153.534ZM224.499 152.804C224.848 152.581 224.951 152.117 224.729 151.768C224.506 151.419 224.043 151.316 223.693 151.538L224.499 152.804ZM226.871 149.44C226.529 149.674 226.442 150.141 226.677 150.483C226.911 150.824 227.378 150.912 227.719 150.677L226.871 149.44ZM230.872 148.421C231.204 148.173 231.271 147.703 231.023 147.371C230.775 147.04 230.305 146.972 229.973 147.22L230.872 148.421ZM232.938 144.884C232.62 145.149 232.577 145.622 232.842 145.941C233.107 146.259 233.579 146.302 233.898 146.037L232.938 144.884ZM236.813 143.448C237.113 143.162 237.124 142.687 236.839 142.387C236.553 142.087 236.078 142.076 235.778 142.362L236.813 143.448ZM238.388 139.65C238.116 139.962 238.148 140.436 238.459 140.708C238.771 140.981 239.245 140.949 239.518 140.637L238.388 139.65ZM241.916 137.532C242.146 137.187 242.053 136.721 241.708 136.491C241.364 136.261 240.898 136.354 240.668 136.699L241.916 137.532ZM242.427 133.466C242.268 133.849 242.45 134.288 242.832 134.446C243.215 134.605 243.654 134.424 243.812 134.041L242.427 133.466ZM244.828 130.132C244.868 129.719 244.567 129.353 244.154 129.313C243.742 129.273 243.375 129.574 243.335 129.987L244.828 130.132ZM243.008 126.486C243.128 126.883 243.546 127.108 243.942 126.989C244.339 126.87 244.564 126.452 244.445 126.055L243.008 126.486ZM242.838 122.224C242.703 121.832 242.277 121.624 241.885 121.758C241.493 121.893 241.285 122.32 241.419 122.712L242.838 122.224ZM240.445 118.237C240.493 118.648 240.865 118.943 241.276 118.895C241.688 118.847 241.983 118.475 241.935 118.064L240.445 118.237ZM241.737 113.739C241.743 113.324 241.411 112.984 240.997 112.979C240.583 112.974 240.243 113.305 240.238 113.719L241.737 113.739ZM240.478 109.243C240.441 109.656 240.747 110.02 241.159 110.056C241.572 110.092 241.936 109.787 241.972 109.374L240.478 109.243ZM242.453 105.001C242.505 104.591 242.214 104.215 241.803 104.163C241.392 104.111 241.017 104.402 240.965 104.812L242.453 105.001ZM241.553 100.418C241.497 100.829 241.785 101.206 242.195 101.262C242.606 101.317 242.984 101.03 243.039 100.619L241.553 100.418ZM243.586 96.204C243.629 95.7921 243.33 95.4231 242.918 95.3799C242.506 95.3368 242.138 95.6357 242.094 96.0477L243.586 96.204ZM242.365 91.7031C242.364 92.1173 242.7 92.4534 243.114 92.4538C243.528 92.4541 243.864 92.1186 243.865 91.7044L242.365 91.7031ZM242.838 87.0054C242.606 86.6619 242.14 86.5712 241.797 86.8027C241.453 87.0342 241.363 87.5003 241.594 87.8438L242.838 87.0054ZM238.418 85.332C238.789 85.5163 239.24 85.3649 239.424 84.9939C239.608 84.6229 239.457 84.1728 239.086 83.9886L238.418 85.332ZM234.741 82.4072C234.341 82.3001 233.93 82.5377 233.823 82.9378C233.716 83.338 233.953 83.7491 234.353 83.8562L234.741 82.4072ZM230.047 82.9676C230.456 83.0312 230.839 82.7509 230.903 82.3416C230.967 81.9323 230.686 81.549 230.277 81.4854L230.047 82.9676ZM225.772 80.9621C225.359 80.9289 224.998 81.2367 224.964 81.6496C224.931 82.0625 225.239 82.4241 225.652 82.4573L225.772 80.9621ZM221.226 82.2442C221.64 82.2508 221.981 81.9203 221.988 81.5061C221.994 81.092 221.664 80.7509 221.249 80.7444L221.226 82.2442ZM186.623 171.548C187.835 171.052 189.024 170.558 190.191 170.068L189.609 168.685C188.447 169.174 187.263 169.665 186.055 170.16L186.623 171.548ZM193.731 168.56C194.926 168.043 196.096 167.53 197.241 167.02L196.632 165.65C195.491 166.157 194.326 166.668 193.136 167.183L193.731 168.56ZM200.726 165.445C201.918 164.897 203.081 164.353 204.216 163.814L203.572 162.459C202.443 162.996 201.286 163.537 200.1 164.082L200.726 165.445ZM207.684 162.134C208.864 161.552 210.009 160.974 211.122 160.402L210.436 159.068C209.331 159.637 208.192 160.21 207.02 160.789L207.684 162.134ZM214.528 158.612C215.691 157.986 216.814 157.367 217.899 156.754L217.161 155.449C216.086 156.056 214.972 156.67 213.818 157.291L214.528 158.612ZM221.226 154.821C222.365 154.141 223.455 153.468 224.499 152.804L223.693 151.538C222.662 152.195 221.584 152.86 220.457 153.534L221.226 154.821ZM227.719 150.677C228.832 149.914 229.882 149.162 230.872 148.421L229.973 147.22C229.001 147.948 227.968 148.688 226.871 149.44L227.719 150.677ZM233.898 146.037C234.955 145.158 235.925 144.294 236.813 143.448L235.778 142.362C234.916 143.184 233.971 144.025 232.938 144.884L233.898 146.037ZM239.518 140.637C240.446 139.575 241.242 138.54 241.916 137.532L240.668 136.699C240.035 137.647 239.279 138.631 238.388 139.65L239.518 140.637ZM243.812 134.041C244.376 132.684 244.707 131.379 244.828 130.132L243.335 129.987C243.23 131.071 242.94 132.231 242.427 133.466L243.812 134.041ZM244.445 126.055C244.246 125.392 243.983 124.757 243.664 124.15L242.336 124.849C242.613 125.374 242.838 125.919 243.008 126.486L244.445 126.055ZM243.664 124.15C243.344 123.543 243.07 122.899 242.838 122.224L241.419 122.712C241.674 123.453 241.978 124.167 242.336 124.849L243.664 124.15ZM241.935 118.064C241.775 116.682 241.718 115.232 241.737 113.739L240.238 113.719C240.218 115.262 240.276 116.778 240.445 118.237L241.935 118.064ZM241.972 109.374C242.099 107.92 242.268 106.456 242.453 105.001L240.965 104.812C240.779 106.277 240.607 107.763 240.478 109.243L241.972 109.374ZM243.039 100.619C243.244 99.0987 243.438 97.6153 243.586 96.204L242.094 96.0477C241.949 97.435 241.758 98.8996 241.553 100.418L243.039 100.619ZM243.865 91.7044C243.866 90.8984 243.829 90.1305 243.745 89.4117L242.255 89.587C242.331 90.2337 242.365 90.9409 242.365 91.7031L243.865 91.7044ZM243.745 89.4117C243.641 88.5261 243.322 87.7239 242.838 87.0054L241.594 87.8438C241.956 88.3809 242.181 88.9583 242.255 89.587L243.745 89.4117ZM239.086 83.9886C237.795 83.3477 236.313 82.8278 234.741 82.4072L234.353 83.8562C235.86 84.2595 237.242 84.748 238.418 85.332L239.086 83.9886ZM230.277 81.4854C228.769 81.2511 227.245 81.0807 225.772 80.9621L225.652 82.4573C227.094 82.5733 228.581 82.7397 230.047 82.9676L230.277 81.4854ZM221.249 80.7444C220.442 80.7317 219.681 80.7344 218.984 80.7495L219.016 82.2492C219.694 82.2344 220.436 82.2318 221.226 82.2442L221.249 80.7444Z"
      />
    </svg>
  );
};

export default HiphopSlopPath;
