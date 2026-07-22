// Floating Hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart-float";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);


// Typing Message
const message = "မွေးနေ့မှာ ပျော်ရွှင်ပါစေ ❤️\nအမြဲတမ်း ချစ်စရာကောင်းတဲ့ ကောင်မလေးဖြစ်နေပါစေ 🤍";

let index = 0;

function typing() {
    const text = document.getElementById("typing-message");

    if (text && index < message.length) {
        text.innerHTML += message[index];
        index++;
        setTimeout(typing, 100);
    }
}

window.onload = () => {
    typing();
};


// Candle flame effect
const flame = document.getElementById("flame");

if (flame) {
    setInterval(() => {
        flame.style.transform =
        `scale(${1 + Math.random() * 0.2})`;
    }, 300);
}
