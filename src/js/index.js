import '@fortawesome/fontawesome-free/js/all.js'
function show_hide() {
  var click = documment.getElementById('drop-content')
  if (click.style.display === 'none') {
    click.style.display = 'block'
  } else {
    click.style.display = 'none'
  }
}
