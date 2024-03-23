// Add event listener for the paste event on the document
document.addEventListener('paste', function(event) {
  // Get the clipboard data
  var clipboardData = (event.clipboardData || window.clipboardData).getData('text');
  if (!clipboardData.includes('archives')) {
    return
  }

  // Prevent the default paste behavior
  event.preventDefault();

  console.warn("whiteSkar - original clipboardData", clipboardData);

  // Remove the string from the document that was just pasted
  removeStringBeforeCursor(clipboardData);

  console.warn("whiteSkar - removed string");
  
  // Replace the word 'archives' with 'messages' in the clipboard data
  clipboardData = clipboardData.replace('archives', 'messages');
  console.warn("whiteSkar - replaced content", clipboardData);
  
  document.execCommand("insertHTML", false, clipboardData);
});

function removeStringBeforeCursor(stringToRemove) {
  // Get the currently focused element
  var focusedElement = document.activeElement;
  
  console.warn("whiteSkar - removeStringBeforeCursor - focusedElement", focusedElement);

  // Ensure the focused element is an input or textarea
  if (focusedElement && (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA')) {
    // Get the current cursor position
    var cursorPosition = focusedElement.selectionStart;

    // Get the current text content of the focused element
    var textContent = focusedElement.value;
    console.warn("whiteSkar - removeStringBeforeCursor - textContent", textContent);

    // Find the start index of the nearest occurrence of the string before the cursor
    var startIndex = textContent.lastIndexOf(stringToRemove, cursorPosition - stringToRemove.length);
    console.warn("whiteSkar - removeStringBeforeCursor - startIndex", startIndex);

    // Check if the string is found before the cursor
    if (startIndex !== -1 && startIndex + stringToRemove.length === cursorPosition) {
      // Remove the string from the text content before the cursor
      var modifiedText = textContent.substring(0, startIndex) + textContent.substring(cursorPosition);
      console.warn("whiteSkar - removeStringBeforeCursor - modifiedText", modifiedText);

      // Update the value of the focused element with the modified text content
      focusedElement.value = modifiedText;

      // Set the cursor position after the modified text
      focusedElement.setSelectionRange(startIndex, startIndex);
    } else{
      console.warn("whiteSkar - removeStringBeforeCursor - did not find string to replace - startIndex", startIndex);
    }
  } else if (focusedElement && focusedElement.hasAttribute('contenteditable')) {
    console.warn("whiteSkar - focusedElement is contenteditable");
    
    // Get the inner text and selection range
    var textContent = focusedElement.innerText;
    var selection = window.getSelection();
    var range = selection.getRangeAt(0).cloneRange();
    var cursorPosition = selection.focusOffset;   

    console.warn("whiteSkar - textContent", textContent);
    console.warn("whiteSkar - selection", selection);
    console.warn("whiteSkar - cursorPosition", cursorPosition);
    
    // Find the start index of the nearest occurrence of the string before the cursor
    var startIndex = textContent.lastIndexOf(stringToRemove, cursorPosition - stringToRemove.length);

    // Check if the string is found before the cursor
    if (startIndex !== -1 && startIndex + stringToRemove.length === cursorPosition) {
      // Remove the string from the text content before the cursor
      var modifiedText = textContent.substring(0, startIndex) + textContent.substring(cursorPosition);

      // Update the inner text of the focused element
      focusedElement.innerText = modifiedText;

      // Adjust the selection range to maintain cursor position
      // var range = document.createRange();
      range.setStart(selection.focusNode, startIndex);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      console.warn("whiteSkar - removeStringBeforeCursor - did not find string to replace - startIndex", startIndex);
    }
  }
}

// Example usage:
// Call the function with the string you want to remove
removeStringBeforeCursor('specificString');

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
