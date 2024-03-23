// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message indicates a clipboard copy event
  if (message.event === 'clipboard-copy') {
    // Perform actions in response to the clipboard copy event
    console.log('whiteSkar - Clipboard content copied!');
    console.log("Clipboard content modified successfully");
  }
});
