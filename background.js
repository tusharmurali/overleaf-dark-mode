chrome.action.onClicked.addListener(tab => {
  chrome.storage.sync.get(['darkMode'], function(result) {
    if (result.darkMode) chrome.action.setIcon({ path: 'img/icon32.png' })
    else chrome.action.setIcon({ path: 'img/icon128.png' })
    chrome.storage.sync.set({ darkMode: !result.darkMode })
  })
})