(async function() {
    const localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    const videoElement = document.getElementById('my-video');
    videoElement.srcObject = localStream;
    videoElement.play();
})();