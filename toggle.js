const style = document.createElement('style')
style.innerText = `html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #e4e8ed;
}

/* 
.cm-editor,
.cm-panels-top,
.pdf-viewer,
.project-list-main-react,
.material-symbols,
.toolbar,
.toolbar-pdf .dropdown-menu,
div[role="separator"],
.ide-react-editor-sidebar,
.site-footer,
*/

body,
${location.href.endsWith("overleaf.com/") || location.href.endsWith("overleaf.com") ? "" : ".navbar, .navbar .dropdown-menu,"}
footer,
.popover,
.tooltip,
.pdf,
.pdf-viewer,
.cm-panels-top,
.toolbar-header,
.ide-react-editor-sidebar,
.history-react,
.toolbar .dropdown-menu,
.modal-backdrop,
.project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle,
.synctex-controls,
.custom-toggler,
.doc-container,
.tag-dot,
.color-picker-item,
.loading,
.history-version-list-container,
.chat {
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

.cm-gutters {
    background-color: transparent !important;
}

.cm-panels-top {
    border-bottom: 1px solid #222 !important;
}

.project-list-main-react, .cm-activeLineGutter {
    background-color: #f4f5f6 !important;
}

.horizontal-resize-handle {
    background-color: #fcfaf7;
}

.doc-container .loading {
    background-color: #000000;
    color: #ffffff;
}

.doc-container, .history-all-versions-container, .loading, #left-menu {
    background-color: #ffffff;
}

.cm-activeLine {
    background: rgba(0, 0, 0, 0.02) !important;
}

::selection, .ͼe.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .ͼe .cm-selectionBackground, .ͼe .cm-content ::selection, .ͼe .cm-searchMatch.cm-searchMatch.cm-searchMatch-selected {
    background-color: rgba(181, 213, 255, 0.3);
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