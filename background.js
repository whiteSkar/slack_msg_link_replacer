// Listen for clicks on the extension button
chrome.action.onClicked.addListener(function(tab) {
  // Send a message to the content script to invoke the replaceTextInEditableElements function
  console.warn("whiteSkar - button Clicked");
  chrome.tabs.sendMessage(tab.id, { action: 'replaceText' });
});
