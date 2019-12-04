var taraAleasa = "";

$("#romania").click(function() {
    oprireSunete();
    var song = $("#basic").get(0);
    song.play();
    alegeTara("ro");
});

$("#uk").click(function() {
    oprireSunete();
    var song = $("#basic").get(0);
    song.play();
    alegeTara("uk");
});

$("#germania").click(function() {
    oprireSunete();
    var song = $("#basic").get(0);
    song.play();
    alegeTara("ge");
});

$("#arrow").click(function() {
    var url = "";
    if (taraAleasa == "ro") {
        url = "romaniaHtml/bancnote.html";
    } else if (taraAleasa == "uk") {

    } else {

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