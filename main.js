search = function (word, tab) {
  var query = word.selectionText;
  chrome.tabs.create({ url: "https://nhentai.to/g/" + query });
};

chrome.contextMenus.create({
  id: "nhentai",
  title: "Show in nhentai",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(search);