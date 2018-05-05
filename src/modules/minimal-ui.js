function move_new_file_button(to_debug_bar) {
  const $ = selector => document.querySelector(selector)
  const $button = $('.sidebar button.new-file')
  const $debug = $('.sidebar section.debug-buttons')
  const $files = $('.sidebar section.sidebar-files')
  if (to_debug_bar) {
    $debug.querySelector('.segmented-buttons').appendChild($button)
  } else {
    $files.insertBefore($button, $files.querySelector(':first-child'))
  }
}

const $ = selector => document.querySelector(selector)
const _$ = selector => {
  const $element = $(selector)
  const $new = $element.cloneNode(true)
  $element.parentNode.replaceChild($new, $element)
  return $new // remove event listeners
}

function minimal_ui() {
  const $body = $('body')
  const _prefix = 'MINIMAL_UI'

  if (!$('#application')) return
  move_new_file_button(true)
  $body.classList.add(_prefix)

  _$('.sidebar .icon-collapse').addEventListener('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    if ($body.classList.contains(_prefix)) {
      $body.classList.remove(_prefix)
      move_new_file_button(false)
    } else {
      minimal_ui()
    }
  })
}

document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
    minimal_ui()
  }
})
