document.addEventListener('copy', function(event) {
  var clipboardData = event.clipboardData || window.clipboardData;
  var copiedText = clipboardData.getData('text');
  
  if (copiedText.includes("slack.com/archives")) {
    var modifiedText = copiedText.replace("archives", "messages");
    clipboardData.setData('ext', modifiedText);
  }
});
