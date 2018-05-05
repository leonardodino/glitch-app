function handle_theme(theme) {
  const $ = selector => document.querySelector(selector)
  const isDark = theme === 'cosmos'
  $('body').classList[isDark ? 'add' : 'remove']('DARK')
}

handle_theme(application.currentTheme())
application.currentTheme.observe(handle_theme)
