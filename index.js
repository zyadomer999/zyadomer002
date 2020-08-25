const video = document.getElementById("video");
const a = document.querySelector("#a");
const h6 = document.querySelector("h6");
const h1 = document.querySelectorAll("h1");
const input = document.querySelectorAll("input");

let time;
let playlist;

let videoSrc = "./fileName.m3u8";

if (Hls.isSupported()) {
  let hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
}
