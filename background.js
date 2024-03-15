chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message indicates a clipboard copy event
  if (message.event === 'clipboard-copy') {
    // Perform actions in response to the clipboard copy event
    console.log('Clipboard content copied!');
    // You can perform further actions here, such as modifying the clipboard content
  }
});
