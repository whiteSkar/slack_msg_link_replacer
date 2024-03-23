function handleClipboardEvent(event) {
  // Check if the event type is 'copy'
  if (event.type === 'copy') {
    // Send a message to the background script indicating a copy event
    console.warn("whiteSkar - handling clipboard event");

    // Create a temporary input element
    var input = document.createElement('input');
    
    // Position the input off-screen
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    
    // Append the input to the document body
    document.body.appendChild(input);

    // Focus the input element to ensure the document.execCommand('paste') works
    input.focus();
    
    // Execute the paste command
    document.execCommand('paste');

    // Get the clipboard content from the input value
    var clipboardContent = input.value;
    
    // Check if the clipboard content contains the word "archives"
    if (!clipboardContent.includes('archives')) {
      // If not, remove the input from the document body and return
      document.body.removeChild(input);
      return;
    }
    
    // Modify the clipboard content
    clipboardContent = clipboardContent.replace('archives', 'messages');
    
    // Remove the input from the document body
    document.body.removeChild(input);
    
    // Send a message to the background script
    chrome.runtime.sendMessage({ event: 'clipboard-copy', clipboardContent: clipboardContent });
  }
}

// Listen for clipboard events
document.addEventListener('copy', handleClipboardEvent);
