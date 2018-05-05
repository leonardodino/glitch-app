const $search = document.querySelector('.project-search-wrapper .search-input')

if (!$search) return

$search.addEventListener('keydown', function(e) {
  console.log('search keydown', e.key)
  if (e.key !== 'Escape') return
  $search.blur()
})
