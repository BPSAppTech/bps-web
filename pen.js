// Draws the pen marks in as they scroll into view. Without JS (or with reduced
// motion) the marks are simply shown; nothing depends on this file.
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('motion')) return;
  var marks = document.querySelectorAll('.pen, .loop__line');
  if (!('IntersectionObserver' in window)) {
    marks.forEach(function (m) { m.classList.add('is-drawn'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      // stagger checkmarks that sit in the same list
      var siblings = el.closest('ol, tbody');
      var delay = 0;
      if (siblings && el.classList.contains('pen--tick')) {
        delay = Array.prototype.indexOf.call(siblings.querySelectorAll('.pen--tick'), el) * 120;
      }
      setTimeout(function () { el.classList.add('is-drawn'); }, delay + 150);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  marks.forEach(function (m) { io.observe(m); });
})();
