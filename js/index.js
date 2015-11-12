//@prepros-prepend lib/jquery/dist/jquery.min.js
//@prepros-prepend lib/jquery-mousewheel/jquery.mousewheel.min.js
//@prepros-prepend lib/simplr-smoothscroll/lib/jquery.simplr.smoothscroll.min.js
//@prepros-prepend functions.js
//@prepros-prepend menu.js


$(function () {
  $.srSmoothscroll({
    // defaults
    step: 55,
    speed: 400,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  })
})