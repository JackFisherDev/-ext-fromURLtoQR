chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({ href: location.href });
});
