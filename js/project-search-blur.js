const $search = document.querySelector('.project-search-wrapper .search-input')

if (!$search) return

$search.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return
  $search.blur()
})
