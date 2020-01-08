var taraAleasa = "";


$("#romania").click(function() {
    oprireSunete();
    var song = $("#leul").get(0);
    song.play();
    alegeTara("ro");
});

$("#uk").click(function() {
    oprireSunete();
    var song = $("#lira").get(0);
    song.play();
    alegeTara("uk");
});

$("#germania").click(function() {
    oprireSunete();
    var song = $("#euro").get(0);
    song.play();
    alegeTara("ge");
});

$("#arrow").click(function() {
    var url = "";
    if (taraAleasa == "ro") {
        url = "romaniaHtml/bancnote.html";
    } else if (taraAleasa == "uk") {
        url = "ukHtml/bancnote.html";
    } else {

        url = "germanyHtml/bancnote.html";
    }
    window.location.replace(url)
});

function oprireSunete() {
    $("audio").each(function() {
        var song = $(this).get(0);
        song.pause();
        song.currentTime = 0;
    });
}

function alegeTara(tara) {
    taraAleasa = tara;
    $("#arrow").css({
        visibility: "visible"
    });
}