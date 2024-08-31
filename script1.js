function playVideo(videoSrc, videoTitle) {
    let videoPlayer = document.getElementById('current-video');
    videoPlayer.src = videoSrc;
    videoPlayer.play();

    let videoTitleElement = document.getElementById('video-title');
    videoTitleElement.textContent = videoTitle;
}
