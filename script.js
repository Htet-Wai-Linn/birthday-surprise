// Floating Hearts

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

    },6000);


},500);






// Page Flow


window.onload = function(){


    const intro = document.getElementById("intro-page");

    const cake = document.getElementById("cake-page");

    const wish = document.getElementById("wish-page");

    const final = document.getElementById("final-page");




    // Intro 4 sec

    setTimeout(()=>{


        intro.style.display="none";

        cake.style.display="flex";


        const music =
        document.getElementById("birthdayMusic");


        if(music){

            music.play().catch(()=>{});

        }


    },4000);







    // Cake show 8 sec

    setTimeout(()=>{


        // Candle blow

        document
        .querySelector(".candle")
        .classList.add("off");



        // Cake shake

        document
        .querySelector(".cake")
        .classList.add("break");



        // Fireworks

        document
        .querySelector(".fireworks")
        .classList.add("show");



        // Confetti

        createConfetti();



    },12000);







    // Go Wish

    setTimeout(()=>{


        cake.style.display="none";


        wish.style.display="flex";


        typing();



    },16000);







    // Final

    setTimeout(()=>{


        wish.style.display="none";


        final.style.display="flex";


    },75000);



};








// Wish Text


const lines = [

"🎂 မွေးနေ့မှာ ပျော်ရွှင်ပါစေ ကောင်မလေး 🤍",

"",

"ကောင်မလေးရဲ့အပြုံးလေးကို မြင်ရတိုင်း",

"ကို့စိတ်ထဲမှာ ပျော်ရွှင်မှုတွေ ပြည့်နှက်လာတယ်",

"",

"ကောင်မလေးရဲ့အသံလေးကို ကြားရတိုင်း",

"နေ့တစ်နေ့ရဲ့ ပင်ပန်းမှုတွေ ပျောက်ကွယ်သွားတယ်",

"",

"ပျော်ရွှင်တဲ့အချိန်တွေမှာပဲဖြစ်ဖြစ်",

"စိတ်ညစ်ရတဲ့အချိန်တွေမှာပဲဖြစ်ဖြစ်",

"ကောင်မလေးဘေးမှာ ရှိနေပေးချင်တဲ့သူပါ",

"",

"ဒီမွေးနေ့ကစပြီး",

"ကောင်မလေးရဲ့ဆန္ဒတွေ အားလုံး ပြည့်ဝပါစေ။",

"",

"ကောင်မလေးရဲ့ အိပ်မက်တွေ တစ်ခုပြီးတစ်ခု",

"အကောင်အထည်ဖော်နိုင်ပါစေ။",

"",

"ကောင်မလေးရဲ့ နေ့ရက်တိုင်း",

"အပြုံးတွေနဲ့ ပြည့်နှက်နေပါစေနော်",

"",

"မွေးဖွားလာပေးခဲ့လို့ ကျေးဇူးတင်ပါတယ်။",

"",

"အခုပြောခဲ့တာတွေက တကယ့်ကို အပိုတွေ မဟုတ်ရပါဘူး။",

"",

"ချစ်တယ်နော် ကောင်မလေး 🤍",

"",

"ပျော်ရွှင်စရာ မွေးနေ့ဖြစ်ပါစေ 🎂✨"

];




let index = 0;




function typing(){


    const box =
    document.getElementById("typing");



    if(index < lines.length){


        let p =
        document.createElement("p");



        p.innerHTML = lines[index];


        p.className="line";



        box.appendChild(p);



        box.scrollTop =
        box.scrollHeight;



        index++;



        setTimeout(typing,2000);



    }


}








// Confetti


function createConfetti(){


    for(let i=0;i<80;i++){


        let c =
        document.createElement("div");



        c.className="confetti";



        c.style.left =
        Math.random()*100+"vw";



        c.style.background =
        "hsl("+Math.random()*360+",100%,50%)";



        c.style.animationDuration =
        (2+Math.random()*3)+"s";



        document.body.appendChild(c);



        setTimeout(()=>{

            c.remove();

        },5000);



    }

}
