// Function to handle clipboard copy event
function handleCopyEvent(event) {
  // Modify the clipboard content as needed (for example, replace 'archives' with 'messages')
  var clipboardData = event.clipboardData || window.clipboardData;
  var modifiedText = clipboardData.getData('text/plain').replace('archives', 'messages');
  
  // Set the modified text back to the clipboard
  clipboardData.setData('text/plain', modifiedText);
}

// Listen for copy events
document.addEventListener('copy', handleCopyEvent);

// function handleClipboardEvent(event) {
//   // Check if the event type is 'copy'
//   if (event.type === 'copy') {
//     // Send a message to the background script indicating a copy event
//     console.warn("whiteSkar - handling clipboard event");
//     chrome.runtime.sendMessage({ event: 'clipboard-copy' });
//   }
// }

// // Listen for clipboard events
// document.addEventListener('copy', handleClipboardEvent);
