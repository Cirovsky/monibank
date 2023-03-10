const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarvideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false});

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarvideo;
});