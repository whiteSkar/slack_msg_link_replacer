function onCopy(e) {
  chrome.extension.sendMessage({event: "copy"});
}

document.addEventListener('copy, onCopy, true);
