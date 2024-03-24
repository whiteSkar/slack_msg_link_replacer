document.addEventListener('copy', async () => {
  await replaceTextInClipboard();
});

// Listening to the 'copy' event does not capture all copy events.
// It does capture the "Copy Link" functionality in slack but not ctrl-c on the slack text input field.
// So have a backup way to handle that case which is to press the extension button.
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'replaceClipboard') {
    (async () => {
      await replaceTextInClipboard();
    })();
  }
});

async function replaceTextInClipboard() {
  let clipboardContent = await navigator.clipboard.readText()
  if (clipboardContent.includes('slack.com/archives')) {
    clipboardContent = clipboardContent.replace('slack.com/archives', 'slack.com/messages');
    await navigator.clipboard.writeText(clipboardContent)
  }
}
