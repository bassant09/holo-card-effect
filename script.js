 const cards= [
    {
        imagePath: "assets/cards/charizard-gx.webp",
        holoGradient: [
            {
                color: "rgba(255,235,0,1)",
                position: "25%",
            },
            {
                color: "rgba(4,249,238,1)",
                position: "46%",
            },
            {
                color: "rgba(214,0,255,1)",
                position: "49%",
            },
            {
                color: "rgba(145,255,128,1)",
                position: "75%",
            },
        ],
        shadowGradient: [
            {
                color: "#ffd700",
                position: "0%",
            },
            {
                color: "#f79d03",
                position: "30%",
            },
            {
                color: "#ee6907",
                position: "70%",
            },
            {
                color: "#e6390a",
                position: "100%",
            },
            {
                color: "#de0d0d",
                position: "100%",
            },
            {
                color: "#d61039",
                position: "100%",
            },
            {
                color: "#cf1261",
                position: "100%",
            },
            {
                color: "#c71585",
                position: "100%",
            },
            {
                color: "#d61039",
                position: "100%",
            },
            {
                color: "#de0d0d",
                position: "100%",
            },
            {
                color: "#ee6907",
                position: "100%",
            },
            {
                color: "#f79d03",
                position: "100%",
            },
            {
                color: "#ffd700",
                position: "100%",
            },
            {
                color: "#ffd700",
                position: "100%",
            },
            {
                color: "#ffd700",
                position: "100%",
            },
        ],
        characterVoice: new Audio("assets/voices/charizardsoundboards.mp3")
    },
    {
        imagePath: "assets/cards/char2.jpeg",
        holoGradient: [
            {
                color: "rgba(255,0,0,1)",
                position: "25%",
            },
            {
                color: "rgba(12,4,249,1)",
                position: "46%",
            },
            {
                color: "rgba(214,0,255,1)",
                position: "49%",
            },
            {
                color: "rgba(149,128,255,1)",
                position: "75%",
            },
            

        ],
  
        shadowGradient: [
            {
                color: "#8D00FFFF",
                position: "0%",
            },
            {
                color: "#5700FFFF",
                position: "30%",
            },
            {
                color: "#FF0052FF",
                position: "70%",
            },
            {
                color: "#8D00FFFF",
                position: "100%",
            },
        ],
        characterVoice:new Audio("assets/voices/venusaur-101soundboards.mp3")
      
    },
    {
        imagePath: "assets/cards/char3.jpeg",
        holoGradient: [
            {
                color: "rgba(16,0,255,1)",
                position: "25%",
            },
            {
                color: "rgba(4,231,249,1)",
                position: "46%",
            },
            {
                color: "rgba(0,224,255,1)",
                position: "49%",
            },
            {
                color: "rgba(51,0,255,1)",
                position: "75%",
            },
            {
                color: "rgba(59,11,255,1)",
                position: "75%",
            },
        ],
        shadowGradient: [
            {
                color: "#00ECFFFF",
                position: "0%",
            },
            {
                color: "#000AFFFF",
                position: "30%",
            },
            {
                color: "#FF0000FF",
                position: "70%",
            },
            {
                color: "#00ECFFFF",
                position: "100%",
            },
        ],
        characterVoice:new Audio("assets/voices/glaceon.mp3")

    },
    {
        imagePath: "assets/cards/pikachu-gx.webp",
        holoGradient: [
            {
                color: "rgba(255,235,0,1)",
                position: "25%",
            },
            {
                color: "rgba(4,249,238,1)",
                position: "46%",
            },
            {
                color: "rgba(214,0,255,1)",
                position: "49%",
            },
            {
                color: "rgba(145,255,128,1)",
                position: "75%",
            },
        ],
        shadowGradient: [
            {
                color: "rgba(0,241,255,1)",
                position: "0%",
            },
            {
                color: "rgba(206,249,4,1)",
                position: "30%",
            },
            {
                color: "rgba(255,214,0,1)",
                position: "70%",
            },
        ],
        characterVoice:new Audio("assets/voices/pikachu_message.mp3")

    },
  
    
  
    
];
function rotateCardAccordianToMouseMove(childCard,cardData) {
  debugger;
  const rotationFactor = 3;
  childCard.addEventListener("mousemove", function (event) {
    const xAngle =
      (event.clientY / window.innerHeight - 0.5) * 45 * rotationFactor;
    const yAngle =
      (event.clientX / window.innerWidth - 0.5) * -45 * rotationFactor;
      childCard.style.transform = `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`;
  });
  childCard.addEventListener("mouseleave", function () {
  childCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  
  });
}
function moveGradientBackGround(childCard,cardData) {
//   const card = document.querySelector(".holo-card");
  const gradient = childCard.querySelector(".gradient-bg");

  childCard.addEventListener("mousemove", function (event) {
    cardData.isMoving=true
    const rect = childCard.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const scaledX = (mouseX / rect.width) * 100;
    const mouseY = event.clientY - rect.top;
    const scaledY = (mouseY / rect.height) * 100;
    const percent = (scaledX + scaledY) / 2;
    const transparentGradient = "rgba(255,255,255,0)";
    const gradientList = [`${transparentGradient} ${percent - 100}%`];
    gradientList.push(
        ...cardData.holoGradient.map((gradient, i) => {
            const calculatePosition =
                ((i + 1) / cardData.holoGradient.length / 2) * 100;
            const factorCompare =
                i + 1 < cardData.holoGradient.length / 2 ? -1 : 1;
            return `${gradient.color} ${
                percent - 40 + calculatePosition * factorCompare
            }%`;
        })
    );
    gradientList.push(`${transparentGradient} ${percent + 50}%`);
    gradient.style.background = `linear-gradient(128deg, ${gradientList.join(', ')})`;
    gradient.style.opacity = "0.4";
    // cardDataTemp= ['rgba(255,255,255,0) 0%', ]
    // gradient.style.background = `linear-gradient(125deg, rgba(255,255,255,0) ${
    //   percent - 50
    // }%, rgba(255,235,0,1) ${percent - 25}%, rgba(4,249,238,1) ${
    //   percent - 10
    // }%, rgba(214,0,255,1) ${percent + 10}%, rgba(145,255,128,1)  ${
    //   percent + 25
    // }%, rgba(255,255,255,0) ${percent + 50}%)`;
    // gradient.style.opacity = "0.4";
  });
  childCard.addEventListener("mouseleave", function () {
    cardData.isMoving=false
    gradient.style.opacity = "0";
  });
}
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
function resetAnimation() {
    const index= getRandomIndex(cards)
    cardsElement[index].classList.add('card-animation')
    cards[index].characterVoice.play()
setTimeout(() => {
    cardsElement[index].classList.remove('card-animation')
    cards[index].characterVoice.pause()
}, 5000);
}
cardsElement=[]
function makeCards() {
  const cardCointaner = document.querySelector(".cards");
  cards.forEach((card) => {
    const element = document.createElement("div");
    cardsElement.push(element)
    element.classList.add("holo-card-parent");
    element.innerHTML = `<div class="holo-card ">
       <div class="card-shadow"></div>
            <div class="stars-gif">
            </div>
            <div class="gradient-bg">
            </div>
            </div>`;
    cardCointaner.appendChild(element);
    const child=element.querySelector('.holo-card');
    const cardShadow=element.querySelector('.card-shadow');

    child.style.backgroundImage=`url(${card.imagePath})`
    cardShadow.style.background=` conic-gradient(
        from 90deg at 40% -25%,
      ${card.shadowGradient.map(e=>{
        return e.color
      }).join(', ')}
      )`
    this.rotateCardAccordianToMouseMove(child,card)
    this.moveGradientBackGround(child,card);

  });
}
function checkCardsMove(){
  return cards.filter(e=>e.isMoving).length>0
}

this.makeCards()
setInterval(function() {
    if(checkCardsMove()) return;
    resetAnimation();
  }, 10000);
