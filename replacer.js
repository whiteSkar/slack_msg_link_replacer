chrome.clipboard.onClipboardDataChanged.addListener(function() {
  chrome.clipboard.readText(function(copiedText) {
    if (copiedText.includes("slack.com/archives")) {
      var modifiedText = copiedText.replace("archives", "messages");
      chrome.clipboard.writeText(modifiedText);
    }
  });
});
