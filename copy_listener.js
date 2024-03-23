// Add event listener for the paste event on the document
document.addEventListener('paste', function(event) {
  // Prevent the default paste behavior
  event.preventDefault();
  
  // Get the clipboard data
  var clipboardData = (event.clipboardData || window.clipboardData).getData('text');
  
  // Modify the clipboard content (replace 'archives' with 'messages', for example)
  var modifiedClipboardData = clipboardData.replace('archives', 'messages');
  
  // Insert the modified clipboard content into the current selection or focused input field
  if (window.getSelection) {
    // For modern browsers that support Selection API
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      // Replace the selected text with the modified clipboard content
      selection.deleteFromDocument();
      selection.getRangeAt(0).insertNode(document.createTextNode(modifiedClipboardData));
    }
  } else if (document.selection && document.selection.type != 'Control') {
    // For older versions of Internet Explorer
    document.selection.createRange().text = modifiedClipboardData;
  }
});

// // Function to handle clipboard copy event
// function handleClipboardEvent(event) {
//   // Check if the event type is 'copy'
//   if (event.type === 'copy') {
//     console.log("whiteSkar - copy event called with event", event);
//     // Create a temporary input element
//     var input = document.createElement('input');
    
//     // Position the input off-screen
//     input.style.position = 'absolute';
//     input.style.left = '-9999px';
    
//     // Append the input to the document body
//     document.body.appendChild(input);

//     // Focus the input element to ensure the document.execCommand('paste') works
//     input.focus();

//     console.log("whiteSkar - paste about to be executed");
    
//     document.execCommand('paste');
//     console.log("whiteSkar - paste executed");

//     // Get the clipboard content from the input value
//     var clipboardContent = input.value;
//     console.log("whiteSkar - cliipboard content is", clipboardContent);
    
//     // Check if the clipboard content contains the word "archives"
//     if (clipboardContent.includes('archives')) {
//       // Modify the clipboard content
//       clipboardContent = clipboardContent.replace('archives', 'messages');
      
//       // Set the modified clipboard content back to the input value
//       input.value = clipboardContent;
      
//       // Select the input content
//       input.select();
      
//       // Execute the copy command
//       console.log("whiteSkar - copy about to be executed with contet", clipboardContent);
//       document.execCommand('copy');
//       console.log("whiteSkar - copy executed");
//     }
    
//     // Remove the input from the document body
//     document.body.removeChild(input);
//   }
// }

// // Listen for clipboard events in the content script
// document.addEventListener('copy', handleClipboardEvent);
