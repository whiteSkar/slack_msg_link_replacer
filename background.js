chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message indicates a clipboard copy event
  if (message.event === 'clipboard-copy') {
    // Perform actions in response to the clipboard copy event
    console.log('Clipboard content copied!');
    
    // Read the clipboard content
    navigator.clipboard.readText()
      .then(clipboardContent => {
        // Replace "archives" with "messages" in the clipboard content
        var modifiedContent = clipboardContent.replace("archives", "messages");
        
        // Write the modified content back to the clipboard
        navigator.clipboard.writeText(modifiedContent)
          .then(() => {
            console.log("Clipboard content modified successfully");
          })
          .catch(error => {
            console.error("Error writing to clipboard:", error);
          });
      })
      .catch(error => {
        console.error("Error reading from clipboard:", error);
      });
  }
});
