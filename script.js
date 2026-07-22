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


// Page Animation Flow
window.onload = () => {

    const intro = document.getElementById("intro-page");
    const cake = document.getElementById("cake-page");
    const wish = document.getElementById("wish-page");
    const final = document.getElementById("final-page");

    setTimeout(() => {
        intro.style.display = "none";
        cake.style.display = "flex";
    }, 4000);


    setTimeout(() => {
        cake.style.display = "none";
        wish.style.display = "flex";

        typing();

    }, 9000);


    setTimeout(() => {
        wish.style.display = "none";
        final.style.display = "flex";

    }, 15000);

};


// Typing Effect
const message =
"မွေးနေ့မှာ ပျော်ရွှင်ပါစေ ❤️\nအမြဲတမ်း ချစ်စရာကောင်းတဲ့ ကောင်မလေးဖြစ်နေပါစေ 🤍";

let i = 0;

function typing(){

    const text = document.getElementById("typing-message");

    if(text && i < message.length){

        text.innerHTML += message.charAt(i);
        i++;

        setTimeout(typing,100);

    }
}
