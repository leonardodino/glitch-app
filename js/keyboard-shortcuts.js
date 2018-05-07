const isInside = (element, className) => (
  !!element.parentElement && (
    element.classList.contains(className) ||
    isInside(element.parentElement, className)
  )
)

document.addEventListener('keydown', function(e) {
  const key = e.key.toLowerCase()
  const shift = !!e.shiftKey
  if (!e.metaKey) return
  if (key === 'n') return jQuery('.sidebar .new-file').click()
  if (key === ',') return application.userOptionsPopVisible.toggle()
  if (key === 'b' && shift) return application.sidebarIsCollapsed.toggle()

  // avoid conflicts with editor keystrokes
  if(isInside(e.target, 'text-editor')) return
  if (key === '/') return application.keyboardShortcutsOverlayVisible.toggle()
  if (key === '?') return application.keyboardShortcutsOverlayVisible.toggle()
})
