try {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.event == "copy") {
      alert("copy detected");
    }
    sendResponse({});
  });
} catch (error) {
  console.error("Error adding message listener:", error);
}
