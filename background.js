// Listen for clicks on the extension button
chrome.action.onClicked.addListener(function(tab) {
  // Send a message to the content script
  chrome.tabs.sendMessage(tab.id, { action: 'replaceClipboard' });
});
