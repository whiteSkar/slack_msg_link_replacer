// Flag to track whether execCommand('paste') has been called
var copyExecuted = false;

// Function to handle clipboard copy event
function handleClipboardEvent(event) {
  // Check if the event type is 'copy'
  if (event.type === 'copy' && !copyExecuted) {
    console.log("whiteSkar - copy event called with event", event);
    // Create a temporary input element
    var input = document.createElement('input');
    
    // Position the input off-screen
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    
    // Append the input to the document body
    document.body.appendChild(input);

    // Focus the input element to ensure the document.execCommand('paste') works
    input.focus();

    console.log("whiteSkar - paste about to be executed");
    
    document.execCommand('paste');
    console.log("whiteSkar - paste executed");

    // Get the clipboard content from the input value
    var clipboardContent = input.value;
    console.log("whiteSkar - cliipboard content is", clipboardContent);
    
    // Check if the clipboard content contains the word "archives"
    if (clipboardContent.includes('archives')) {
      // Modify the clipboard content
      clipboardContent = clipboardContent.replace('archives', 'messages');
      
      // Set the modified clipboard content back to the input value
      input.value = clipboardContent;
      
      // Select the input content
      input.select();
      
      // Execute the copy command
      copyExecuted = true;
      console.log("whiteSkar - copy about to be executed with contet", clipboardContent);
      
      document.execCommand('copy');
      console.log("whiteSkar - copy executed");
    }
    
    // Remove the input from the document body
    document.body.removeChild(input);
  }
}

// Listen for clipboard events in the content script
document.addEventListener('copy', handleClipboardEvent);
