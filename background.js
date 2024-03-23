// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message event is 'clipboard-copy'
  if (message.event === 'clipboard-copy') {

  }
});
