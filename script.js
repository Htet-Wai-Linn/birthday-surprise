function surprise() {
    alert("🎂 Happy Birthday 🎂\n\n🤍 ကောင်မလေး 🤍\n\nမွေးနေ့မှာ ပျော်ရွှင်ပါစေ ❤️");
}


// Floating hearts
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "25px";
    heart.style.animation = "float 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 500);
