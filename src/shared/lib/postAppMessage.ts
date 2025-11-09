type AppMessageMethod = 'showToast' | 'setHeight' | 'openUrl' | 'showVideoUrl';

declare global {
  interface Window {
    Android: {
      showToast: (message: string) => void;
      setHeight: (message: string) => void;
      openUrl: (message: string) => void;
      showVideoUrl: (message: string) => void;
    };
    webkit: {
      messageHandlers: {
        weski: {
          postMessage: ({ method, message }: { method: AppMessageMethod; message: string }) => void;
        };
      };
    };
  }
}

const postAppMessage = (
  method: AppMessageMethod,
  message: string,
  isWebview: boolean,
  callback: (message: string) => void
) => {
  const userAgent = navigator.userAgent.toLowerCase();
  const android = userAgent.match(/android/i);
  const iphone = userAgent.match(/iphone/i);

  if (isWebview) {
    if (android !== null) {
      switch (method) {
        case 'showToast':
          return window.Android.showToast(message);
        case 'setHeight':
          return window.Android.setHeight(message);
        case 'openUrl':
          return window.Android.openUrl(message);
        case 'showVideoUrl':
          return window.Android.showVideoUrl(message);
      }
    } else if (iphone !== null) {
      return window.webkit.messageHandlers.weski.postMessage({
        method: method,
        message: message,
      });
    }
  }
  return callback(message);
};

export default postAppMessage;
