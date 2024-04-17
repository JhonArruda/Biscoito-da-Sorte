document.getElementById('luck').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * fortuneMessages.length);
    const message = fortuneMessages[randomIndex];
    document.getElementById('message').innerText = message;
})

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}