// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//   if (message.action === 'replaceText') {
//     replaceTextInEditableElements();
//   } else if (message.action === 'replaceClipboard') {
//     replaceTextInClipboard();
//   }
// });

document.addEventListener('copy', async () => { 
  let clipboardContent = await navigator.clipboard.readText()
  if (clipboardContent.includes('slack.com/archives')) {
    clipboardContent = clipboardContent.replace('slack.com/archives', 'slack.com/messages');
    await navigator.clipboard.writeText(clipboardContent)
  }
});
                             
// function replaceTextInClipboard() {
//   console.warn("whiteSkar - copy event called with event", event);
//   // Create a temporary input element
//   var input = document.createElement('input');
  
//   // Position the input off-screen
//   input.style.position = 'absolute';
//   input.style.left = '10px';
  
//   // Append the input to the document body
//   document.body.appendChild(input);

//   // Focus the input element to ensure the document.execCommand('paste') works
//   input.focus();

//   console.warn("whiteSkar - paste about to be executed");

//   const pasteResult = document.execCommand('paste')
//   console.warn('whiteSkar - pasteResult: ', pasteResult);

//   // Get the clipboard content from the input value
//   var clipboardContent = input.value;
//   console.warn("whiteSkar - cliipboard content is", clipboardContent);
  
//   // Check if the clipboard content contains the word "archives"
//   if (clipboardContent.includes('slack.com/archives')) {
//     // Modify the clipboard content
//     clipboardContent = clipboardContent.replace('slack.com/archives', 'slack.com/messages');
    
//     // Set the modified clipboard content back to the input value
//     input.value = clipboardContent;
    
//     // Select the input content
//     input.select();
    
//     // Execute the copy command
//     console.warn("whiteSkar - copy about to be executed with contet", clipboardContent);
//     document.execCommand('copy');
//     console.warn("whiteSkar - copy executed");
//   }
  
//   // Remove the input from the document body
//   // document.body.removeChild(input);
// }

// // Function to find and replace text in editable elements
// function replaceTextInEditableElements() {
//   // Get all elements in the document
//   var allElements = document.querySelectorAll('*');
  
//   // Loop through each element
//   allElements.forEach(function(element) {
//     // Check if the element is editable (e.g., input, textarea)
//     if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
//       // Split the element's value by spaces
//       var values = element.value.split(' ');
      
//       // Loop through each value
//       values.forEach(function(value, index) {
//         // Check if the value contains "slack.com/archives"
//         if (value.includes("slack.com/archives")) {
//           // Replace all occurrences of "archives" with "messages" in the value
//           values[index] = value.replace(/archives/g, "messages");
//         }
//       });
      
//       // Join the modified values back into a single string
//       var newValue = values.join(' ');
      
//       // Update the element's value with the modified text
//       element.value = newValue;
//     } else if (element.contentEditable === 'true') {
//       // Split the element's text content by spaces
//       var textContent = element.textContent;
//       var values = textContent.split(' ');
      
//       // Loop through each value
//       values.forEach(function(value, index) {
//         // Check if the value contains "slack.com/archives"
//         if (value.includes("slack.com/archives")) {
//           // Replace all occurrences of "archives" with "messages" in the value
//           values[index] = value.replace(/archives/g, "messages");
//         }
//       });
      
//       // Join the modified values back into a single string
//       var newTextContent = values.join(' ');
      
//       // Update the element's text content with the modified text
//       element.textContent = newTextContent;
//     }
//   });
// }
