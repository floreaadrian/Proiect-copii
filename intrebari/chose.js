var raspunsAles = "";

$("#corect").click(function() {
    $(this).css("background", 'linear-gradient(270deg, #1ad9a8, #a5df30, #d228ee, #300c89)');
    $(this).css('background-size', '800% 800%');
    alegeRaspuns("corect");
});

$("#gresit1").click(function() {
    alegeRaspuns("gresit");
});

$("#gresit2").click(function() {
    alegeRaspuns("gresit");
});


function oprireSunete() {
    $("audio").each(function() {
        var song = $(this).get(0);
        song.pause();
        song.currentTime = 0;
    });
}

$('#bun').on('ended', function() {
    oprireSunete();
    $("#arrow").css({
        visibility: "visible"
    });
});

$('#gresit').on('ended', function() {
    oprireSunete();
    var song = $("#intrebare").get(0);
    song.play();
});

$("#nota").click(function() {
    oprireSunete();
    var song = $("#intrebare").get(0);
    song.play();
});

$("#home").click(function() {
    window.location.replace("../index.html");
});


function alegeRaspuns(raspuns) {
    var intrebare = $("#intrebare").get(0);
    if (intrebare.paused) {
        if (raspuns == "corect") {
            oprireSunete();
            var song = $("#bun").get(0);
            song.play();
        } else {
            oprireSunete();
            var song = $("#rau").get(0);
            song.play();
        }
    }
}