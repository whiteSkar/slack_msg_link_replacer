function handleClipboardEvent(event) {
  // Check if the event type is 'copy'
  if (event.type === 'copy') {
    // Send a message to the background script indicating a copy event
    console.warn("whiteSkar - handling clipboard event");
    chrome.runtime.sendMessage({ event: 'clipboard-copy' });
  }
}

// Listen for clipboard events
document.addEventListener('copy', handleClipboardEvent);
