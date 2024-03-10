const style = document.createElement('style')
style.innerText = `html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #e4e8ed;
}

.cm-editor, .ace_editor, .pdf-viewer, .pdfjs-controls, .project-list-main, .project-list-main .fa-circle, .site-footer, #review-panel, .modal-body, .ui-layout-mask, #left-menu, .history-entry-day, .loading-panel, #editor-rich-text {
    filter: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg">\
      <filter id="invert" color-interpolation-filters="linearRGB">\
        <feColorMatrix in="SourceGraphic" type="matrix"\
          values="-0.98701696766 0 0 0 1\
            0 -0.98701696766 0 0 1\
            0 0 -0.98701696766 0 1\
            0 0 0 1 0" />\
      </filter>\
    </svg>#invert');
}

.project-list-main {
    background-color: #f4f5f8;
}`

// -webkit-filter: invert(100%);

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