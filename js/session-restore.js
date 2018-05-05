!(function() {
  const url = localStorage.getItem('last-url')
  if (!url) return
  if (url === window.location.toString()) return
  localStorage.setItem('last-url', window.location.toString())
  window.location = url
})()

window.addEventListener('beforeunload', function() {
  localStorage.removeItem('last-url')
})

document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
    localStorage.setItem('last-url', window.location.toString())
  }
})
