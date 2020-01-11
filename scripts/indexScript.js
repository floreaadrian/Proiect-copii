$("#invatare").click(function() {
    window.location.replace("./invatare.html")
});

$("#joaca").click(function() {
    window.location.replace("./joaca.html")
});

const oneday = 60 * 60 * 24 * 1000;
if (!localStorage['lastTime']) {
    localStorage['lastTime'] = Date.now();
    window.location.replace("./invatare.html")
}
if (localStorage['lastTime'] - Date.now() > oneday) {
    localStorage['lastTime'] = Date.now();
    window.location.replace("./invatare.html")
}