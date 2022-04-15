chrome.storage.sync.get(['darkMode'], function(result) {
  if (!result.darkMode) chrome.storage.sync.set({ darkMode: true })
})

chrome.action.onClicked.addListener(() => {
  chrome.storage.sync.get(['darkMode'], function(result) {
    if (result.darkMode) chrome.action.setIcon({ path: 'img/icon32-disabled.png' })
    else chrome.action.setIcon({ path: 'img/icon128.png' })
    chrome.storage.sync.set({ darkMode: !result.darkMode })
  })
})