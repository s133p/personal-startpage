// single keys
Mousetrap.bind('x', function() { chrome.tabs.getSelected(null, function(tab) { chrome.tabs.remove(tab.id); }); });
Mousetrap.bind('t', function() { chrome.tabs.create({}) });

// Mousetrap.bind('r', function() { window.location = 'http://feedly.com/i/latest' });
// Mousetrap.bind('t', function() { window.location = 'https://www.tumblr.com/dashboard' });
// Mousetrap.bind('y', function() { window.location = 'https://www.youtube.com/' });
// Mousetrap.bind('f', function() { window.location = 'https://www.facebook.com/' });
// Mousetrap.bind('i', function() { window.location = 'https://inbox.google.com/?pli=1' });
// Mousetrap.bind('n', function() { window.location = 'https://www.netflix.com/browse' });

Mousetrap.bind('up up down down left right left right b a', function() { bloop(32, 8); });
Mousetrap.bind('v o i d', function() { bloop(18, 8); });
Mousetrap.bind('enter', function() { bloop(1, 30); });

var      l = [];
function bloop(num, delay) {
  var listy = document.getElementsByTagName('a')
  var fixy = []

  for (i in listy) {
    fixy.push(listy[i])
    if (i == (listy.length - 1).toString()) break
  }

  fixy.reverse()
  l = fixy.slice(0, fixy.length);

  if (num % 2 == 0) num += 1

  doBloop(fixy, false, num - 1, delay)
}

function doBloop(listy, isAntiBloop, count, delay) {
  if (listy.length <= 0 && count >= 0) doBloop(l.slice(0, l.length), !isAntiBloop, --count, delay);

  if (listy.length <= 0) return;

  var blooper = listy.pop()

  if (blooper && blooper != undefined && blooper.classList != undefined) {
    if (isAntiBloop) blooper.classList.remove('hover')
    else blooper.classList.add('hover')
  }

  setTimeout(() => {doBloop(listy, isAntiBloop, count, delay)}, delay)
}
