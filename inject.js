window.__monkeyCache = window.__monkeyCache || {}

!(() => {
  /* @import js/session-restore.js */
})()

application && (() => {
  /* @import js/focus-within-polyfill.js */
})()

application && (() => {
  /* @import js/theme-watcher.js */
})()

application && (() => {
  /* @import js/minimal-ui.js */
})()

application && (() => {
  /* @import js/project-search-blur.js */
})()

application && (() => {
  /* @import js/keyboard-shortcuts.js */
})()

!((application, cache) => {
  /* @import js/optmize-history.js */
})(application, window.__monkeyCache)
