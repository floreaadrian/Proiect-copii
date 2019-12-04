aud = document.getElementById("basic");
aud.onended = function() {
    $("#arrow").css({
        visibility: "visible"
    });
}

$("#nota").click(function() {
    $("#arrow").css({
        visibility: "hidden"
    });
    oprireSunete();
    var song = $("#basic").get(0);
    song.play();
});

function oprireSunete() {
    $("audio").each(function() {
        var song = $(this).get(0);
        song.pause();
        song.currentTime = 0;
    });
}