const style = document.createElement('style')
style.innerText = `html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #e4e8ed;
}

.cm-editor, .ace_editor, .pdf-viewer, .pdfjs-controls, .project-list-main, .project-list-main .fa-circle, .site-footer, #review-panel, .modal-content, #left-menu, .history-entry-day, .loading-panel, #editor-rich-text {
    filter: invert(100%);
    -webkit-filter: invert(100%);
}

.project-list-main {
    background-color: #f4f5f8;
}`

chrome.storage.sync.get(['darkMode'], function(result) {
    if (result.darkMode) document.body.appendChild(style)
    else document.body.removeChild(style)
})

chrome.storage.onChanged.addListener(() => {
    chrome.storage.sync.get(['darkMode'], function(result) {
        if (result.darkMode) document.body.appendChild(style)
        else document.body.removeChild(style)
    })
})