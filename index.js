// single keys
Mousetrap.bind('x', function() {
chrome.tabs.getSelected(null, function(tab) {
 chrome.tabs.remove(tab.id);
 });
});

Mousetrap.bind('r', function() { window.location = "http://feedly.com/i/latest" });
Mousetrap.bind('t', function() { window.location = "https://www.tumblr.com/dashboard" });
Mousetrap.bind('y', function() { window.location = "https://www.youtube.com/" });
Mousetrap.bind('f', function() { window.location = "https://www.facebook.com/" });
Mousetrap.bind('i', function() { window.location = "https://inbox.google.com/?pli=1" });
Mousetrap.bind('n', function() { window.location = "https://www.netflix.com/browse" });

Mousetrap.bind('up up down down left right left right b a', function() {
    var test = document.getElementsByTagName("a")
    for (i in test){
        if(test[i] && test[i] !== undefined && test[i].classList != undefined)
            test[i].classList.add("hover")
    }

    setTimeout(() => {
        var test = document.getElementsByTagName("a")
        for (i in test){
            if(test[i] && test[i] !== undefined && test[i].classList != undefined)
                test[i].classList.remove("hover")
        }
    }, 1.25*1000)
});


