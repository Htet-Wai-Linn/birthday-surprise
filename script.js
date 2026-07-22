// Floating hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "heart-float";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 6000);


}, 500);



// Page Change

window.onload = function(){


    const intro = document.getElementById("intro-page");
    const cake = document.getElementById("cake-page");
    const wish = document.getElementById("wish-page");
    const final = document.getElementById("final-page");


    // Intro 4 seconds

    setTimeout(()=>{

        intro.style.display = "none";

        cake.style.display = "flex";


        // Music start
        const music =
        document.getElementById("birthdayMusic");

        if(music){
            music.play();
        }


    },4000);



    // Cake 8 seconds

    setTimeout(()=>{

        cake.style.display = "none";

        wish.style.display = "flex";

        typing();


    },12000);



    // Final

    setTimeout(()=>{

        wish.style.display = "none";

        final.style.display = "flex";


    },19000);



};



// Typing effect

const text =
"မွေးနေ့မှာ ပျော်ရွှင်ပါစေ ❤️\n\n"+
"အမြဲတမ်း ချစ်စရာကောင်းတဲ့\n"+
"ကောင်မလေးဖြစ်နေပါစေ 🤍";


let index = 0;


function typing(){


    const box =
    document.getElementById("typing");


    if(index < text.length){


        box.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);


    }


}
