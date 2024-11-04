declare global {
  interface Window {
    BRIDGE: {
      sendMessage: (message: string) => void;
    };
    webkit: {
      messageHandlers: {
        weski: {
          showToast: (message: string) => void;
        };
      };
    };
  }
}

const postAppMessage = (message: string) => {
  const userAgent = navigator.userAgent;
  const android = userAgent.match(/Android/i);
  const iphone = userAgent.match(/iPhone/i);
    
  if (android !== null) {
    console.log("Android");
    return window.BRIDGE.sendMessage(message);

  } else if (iphone !== null) {
    console.log("iOS");
    return window.webkit.messageHandlers.weski.showToast(message);
  
  } else {
    return window.opener.postMessage(message);
  }
}

export default postAppMessage;