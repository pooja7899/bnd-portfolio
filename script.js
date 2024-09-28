const cameraIcon = document.getElementById('cameraIcon');
const switchCameraIcon = document.getElementById('switchCameraIcon');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');

let currentStream;
let facingMode = 'environment'; // Start with the back camera

async function startCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop()); // Stop the current stream
    }

    currentStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facingMode }
    });
    video.srcObject = currentStream;

    // Show the snap button after starting the camera
    snapButton.style.display = 'block';
}

// Capture photo
snapButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imageDataUrl = canvas.toDataURL('image/png');
    console.log(imageDataUrl); // This is the captured image

    video.style.display = 'none';
    const img = new Image();
    img.src = imageDataUrl;
    document.body.appendChild(img); // Display the captured image
});

// Switch camera functionality
switchCameraIcon.addEventListener('click', () => {
    facingMode = (facingMode === 'environment') ? 'user' : 'environment'; // Toggle between cameras
    startCamera(); // Restart the camera with the new facing mode
});

// Start camera on icon click
cameraIcon.addEventListener('click', startCamera);