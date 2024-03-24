document.addEventListener('copy', async () => {
  await replaceTextInClipboard();
});

// Listening to the 'copy' event does not capture all copy events.
// It does capture the "Copy Link" functionality in slack but not ctrl-c on the slack text input field.
// So have a backup way to handle that case which is to press the extension button.
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'replaceClipboard') {
    await replaceTextInClipboard();
  }
});

async function replaceTextInClipboard() {
  let clipboardContent = await navigator.clipboard.readText()
  if (clipboardContent.includes('slack.com/archives')) {
    clipboardContent = clipboardContent.replace('slack.com/archives', 'slack.com/messages');
    await navigator.clipboard.writeText(clipboardContent)
  }
  
  // console.warn("whiteSkar - copy event called with event", event);
  // // Create a temporary input element
  // var input = document.createElement('input');
  
  // // Position the input off-screen
  // input.style.position = 'absolute';
  // input.style.left = '10px';
  
  // // Append the input to the document body
  // document.body.appendChild(input);

  // // Focus the input element to ensure the document.execCommand('paste') works
  // input.focus();

  // console.warn("whiteSkar - paste about to be executed");

  // const pasteResult = document.execCommand('paste')
  // console.warn('whiteSkar - pasteResult: ', pasteResult);

  // // Get the clipboard content from the input value
  // var clipboardContent = input.value;
  // console.warn("whiteSkar - cliipboard content is", clipboardContent);
  
  // // Check if the clipboard content contains the word "archives"
  // if (clipboardContent.includes('slack.com/archives')) {
  //   // Modify the clipboard content
  //   clipboardContent = clipboardContent.replace('slack.com/archives', 'slack.com/messages');
    
  //   // Set the modified clipboard content back to the input value
  //   input.value = clipboardContent;
    
  //   // Select the input content
  //   input.select();
    
  //   // Execute the copy command
  //   console.warn("whiteSkar - copy about to be executed with contet", clipboardContent);
  //   document.execCommand('copy');
  //   console.warn("whiteSkar - copy executed");
  // }
  
  // // Remove the input from the document body
  // // document.body.removeChild(input);
}
