// single keys
Mousetrap.bind('x', function() {
  chrome.tabs.getSelected(null, function(tab) { chrome.tabs.remove(tab.id); });
});
Mousetrap.bind('t', function() { chrome.tabs.create({}) });

// 'Presets'
shortcut('0', [
  'https://downstream.hipchat.com/chat/lobby', 'http://metrics-internal.downstreamlabs.com/metricsd/dashboard/db/lukes-dashboard?refresh=10s&orgId=1'
]);

shortcut('2', ['http://feedly.com/i/latest', 'https://www.reddit.com/r/vim/']);

shortcut('3', [
  'http://feedly.com/i/latest', 'https://www.facebook.com/', 'https://www.tumblr.com/dashboard'
]);

shortcut('5', [
  'http://feedly.com/i/latest', 'https://www.facebook.com/', 'https://www.tumblr.com/dashboard',
  'https://inbox.google.com/?pli=1'
]);

shortcut('5', [
  'http://feedly.com/i/latest', 'https://www.facebook.com/', 'https://www.tumblr.com/dashboard',
  'https://inbox.google.com/?pli=1', 'https://www.youtube.com/'
]);

shortcut('6', [
  'http://feedly.com/i/latest', 'https://www.facebook.com/', 'https://www.tumblr.com/dashboard',
  'https://inbox.google.com/?pli=1', 'https://www.youtube.com/', 'https://www.netflix.com/browse'
]);

// Fancy silly mappings
Mousetrap.bind('up up down down left right left right b a', function() { bloop(32, 8); });
Mousetrap.bind('v o i d', function() { bloop(18, 24); });
Mousetrap.bind('enter', function() { bloop(1, 30); });

function openTabList(urls) {
  var replace = urls[0];
  for (var i in urls) {
    if (i == 0) continue;
    chrome.tabs.create({url: urls[i], active: false});
  }
  window.location = replace;
}
function shortcut(key, tablist) {
  Mousetrap.bind(key, function() { openTabList(tablist); });
}


var      l = [];
function bloop(num, delay) {
  var listy = document.getElementsByTagName('a');
  var fixy  = [];

  for (i in listy) {
    fixy.push(listy[i]);
    if (i == (listy.length - 1).toString()) break;
  }

  fixy.reverse();
  l = fixy.slice(0, fixy.length);

  if (num % 2 == 0) num += 1;

  doBloop(fixy, false, num - 1, delay);
}

function doBloop(listy, isAntiBloop, count, delay) {
  if (listy.length <= 0 && count >= 0) {
    doBloop(l.slice(0, l.length), !isAntiBloop, --count, delay);
  }

  if (listy.length <= 0) return;

  var blooper = listy.pop();

  if (blooper && blooper != undefined && blooper.classList != undefined) {
    if (isAntiBloop)
      blooper.classList.remove('hover');
    else
      blooper.classList.add('hover');
  }

  setTimeout(() => {doBloop(listy, isAntiBloop, count, delay)}, delay);
}
