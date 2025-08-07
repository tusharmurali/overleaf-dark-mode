const style = document.createElement('style')
style.innerText = `html, .loading-screen.ng-scope, .history-entries, .history-labels-list {
    background-color: black !important;
}

.pdf-viewer {
    background-color: #ede9e4;
}

/* 
Previously used, now unused:
${location.href.endsWith("overleaf.com/") || location.href.endsWith("overleaf.com") ? "" : ".navbar, .navbar .dropdown-menu,"},
footer,
.cm-editor,
.cm-panels-top,
.pdf-viewer,
.project-list-main-react,
.material-symbols,
.synctex-controls,
.toolbar,
.toolbar-pdf .dropdown-menu,
div[role="separator"],
.ide-react-editor-sidebar,
.site-footer,
.loading
*/

body,
.popover,
[data-owner=writefull],
.toolbar-editor,
.tooltip,
.pdf,
.pdf-viewer,
.toolbar-header,
.ide-react-editor-sidebar,
.history-react,
.toolbar .dropdown-menu,
.modal-backdrop,
.project-list-sidebar-wrapper-react,
.project-list-main-react .fa-circle,
.custom-toggler,
.horizontal-resize-handle,
.doc-container,
.tag-dot,
.color-picker-item,
.history-version-list-container,
.chat {
    filter: invert(0.999) hue-rotate(180deg);
}

.cm-panels-top {
    border-bottom: 1px solid #ddd !important;
}

.cm-gutters {
    background-color: transparent !important;
}

.project-list-main-react, .cm-activeLineGutter, .pdf-viewer {
    background-color: #f6f5f4 !important;
}

.horizontal-resize-handle {
    /* background-color: #f7f9fc; */
    z-index: 1;
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

/*
::selection, .ͼe.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .ͼe .cm-selectionBackground, .ͼe .cm-content ::selection, .ͼe .cm-searchMatch.cm-searchMatch.cm-searchMatch-selected {
    background-color: rgba(255, 223, 181, 0.7);
} */`

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