function zoomIn() {
    const painting = document.getElementById("painting");
    const frame = document.getElementById("frame");
    const container = document.querySelector(".museum-container");
    const audioPlayer = document.getElementById("audioPlayer");

    if (!frame.classList.contains('zoomed')) {
        // Zoom in the painting
        frame.classList.add('zoomed');
        painting.classList.add('zoomed');
        
        // Blur the background
        container.classList.add('blurred');
        
        // Show the audio player and start playing the song
        audioPlayer.play();
    } else {
        // Zoom out the painting
        frame.classList.remove('zoomed');
        painting.classList.remove('zoomed');

        // Remove the background blur
        container.classList.remove('blurred');

        // Pause the audio and hide player
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
}
