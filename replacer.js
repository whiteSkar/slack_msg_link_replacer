chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: replaceArchivesWithMessages,
    });
  });
});

function replaceArchivesWithMessages() {
  navigator.clipboard.readText().then((text) => {
    if (text.includes("slack.com/archives")) {
      const newText = text.replace("archives", "messages");
      navigator.clipboard.writeText(newText).then(() => {
        console.log('Clipboard content replaced from slack.com/archives to slack.com/messages');
      });
    }
  });
}
