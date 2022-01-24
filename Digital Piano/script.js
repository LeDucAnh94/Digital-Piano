const keys = document.querySelectorAll(".key");
const note = document.querySelector(".key-pressed");

window.addEventListener("keydown", playNote);

function playNote(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!key) return;

    const keyNote = key.dataset.note;
    console.log(keyNote);

    key.classList.and("playing");
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}

// Remove playing class
keys.forEach((key) => {
    key.addEventListener("transitioned", removeTransition);
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}