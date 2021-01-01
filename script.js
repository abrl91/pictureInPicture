const videoElemnt = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaScreen() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
        videoElemnt.srcObject = mediaSteam;
        videoElemnt.onloadedmetadata = () => {
            videoElemnt.play();
        }
    } catch (error) {
        console.log(error, 'ooopsy...an error accrued :(');
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElemnt.requestPictureInPicture();
    button.disabled = false;
});

selectMediaScreen();
