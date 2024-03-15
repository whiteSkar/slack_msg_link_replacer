chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.warn("whiteSkar - message Received", message.event)
  // Check if the message indicates a clipboard copy event
  if (message.event === 'clipboard-copy') {
    // Perform actions in response to the clipboard copy event
    console.warn('Clipboard content copied!');
    // You can perform further actions here, such as modifying the clipboard content
  }
});
