document.addEventListener('keydown', function(e) {
  const key = e.key.toLowerCase()
  const shift = !!e.shiftKey
  if (!e.metaKey) return
  if (key === 'n') return jQuery('.sidebar .new-file').click()
  if (key === '?') return application.keyboardShortcutsOverlayVisible.toggle()
  if (key === '/') return application.keyboardShortcutsOverlayVisible.toggle()
  if (key === ',') return application.userOptionsPopVisible.toggle()
  if (key === 'b' && shift) return application.sidebarIsCollapsed.toggle()
})
