declare global {
  interface Window {
    Android: {
      showToast: (message: string) => void;
    };
    webkit: {
      messageHandlers: {
        weski: {
          postMessage: ({ method, message }: { method: "showToast", message: string }) => void;
        };
      };
    };
  }
}

const postAppMessage = (message: string, isWebview: boolean, showToast: (message: string) => void) => {
  const userAgent = navigator.userAgent.toLowerCase();
  const android = userAgent.match(/android/i);
  const iphone = userAgent.match(/iphone/i);

  if (isWebview) {
    if (android !== null) {
      return window.Android.showToast(message);
    } else if (iphone !== null) {
      if (window.webkit.messageHandlers.weski) {
        window.webkit.messageHandlers.weski.postMessage({ method: "showToast", message: message });
      } else {
        console.error("Weski bridge is not available.");
      }
    } else {
      return showToast(message);
    }
  }
  
  return showToast(message);
}

export default postAppMessage;