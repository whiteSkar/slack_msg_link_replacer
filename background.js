// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message indicates a clipboard copy event
  if (message.event === 'clipboard-copy') {
    // Perform actions in response to the clipboard copy event
    console.log('whiteSkar - Clipboard content copied!');
    
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
    
    // Remove the input from the document body
    document.body.removeChild(input);
    
    // Create a temporary textarea element
    var textarea = document.createElement('textarea');
    
    // Position the textarea off-screen
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    
    // Set the value of the textarea to the clipboard content
    textarea.value = clipboardContent;
    
    // Append the textarea to the document body
    document.body.appendChild(textarea);
    
    // Select the textarea content
    textarea.select();
    
    // Execute the copy command
    document.execCommand('copy');
    
    // Remove the textarea from the document body
    document.body.removeChild(textarea);
    
    console.log("Clipboard content modified successfully");
  }
});
