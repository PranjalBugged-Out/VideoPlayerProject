document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("videoPlayer");
    let playBtn = document.getElementById("playBtn");
    let pauseBtn = document.getElementById("pauseBtn");
    let stopBtn = document.getElementById("stopBtn");

    // Play video
    playBtn.addEventListener("click", function () {
        video.play();
    });

    // Pause video
    pauseBtn.addEventListener("click", function () {
        video.pause();
    });

    // Stop video (pause & reset time)
    stopBtn.addEventListener("click", function () {
        video.pause();
        video.currentTime = 0;
    });
});
