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

const postAppMessage = (message: string) => {
  const userAgent = navigator.userAgent.toLowerCase();
  const android = userAgent.match(/android/i);
  const iphone = userAgent.match(/iphone/i);

  if (android !== null) {
    console.log("Android");
    return window.Android.showToast(message);
  } else if (iphone !== null) {
    console.log("iOS");
    if (window.webkit.messageHandlers.weski) {
      window.webkit.messageHandlers.weski.postMessage({ method: "showToast", message: message });
    } else {
      console.error("Weski bridge is not available.");
    }
  } else {
    return window.opener.postMessage(message);
  }
}

export default postAppMessage;