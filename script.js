const startBtn = document.getElementById('startBtn');
const da = document.getElementById('da');
const net = document.getElementById('net');
const sun = document.getElementById('sun');
const solnse = document.getElementById('solnse');
const moon = document.getElementById('moon');
const cinemaOverlay = document.getElementById('cinemaOverlay');
const giftWrap = document.getElementById('giftWrap');
const giftText = document.getElementById('giftText');
const gift = document.querySelector('.gift');
const toggleBtn = document.getElementById("dayNightToggle");
const birthdayTitle = document.getElementById('birthdayTitle');
const tekst = document.getElementById('tekst');
const elem = document.documentElement;
const body = document.body;

da.addEventListener('click', () => {
  setTimeout(() => {
  birthdayTitle.classList.add('active');
}, 2000);
  sun.classList.add('active');
  body.classList.add("sunset");
  setTimeout(() => {
  tekst.classList.add('active');
}, 2000);

setTimeout(() => {
  toggleBtn.classList.add("show");
}, 2000);

  da.classList.add('hideBtn');
  da.style.pointerEvents = 'none';
  net.classList.add('hideBtn');
  net.style.pointerEvents = 'none'; 

    setTimeout(() => {
    giftWrap.classList.add('hide');
  }, 1000);

  giftText.classList.add('hide');
  gift.classList.add('open');
});





startBtn.addEventListener('click', () => {
startBtn.classList.add('active');
cinemaOverlay.classList.add('fade-in');
});

startBtn.addEventListener('transitionend', (r) => {
  if (r.propertyName === 'opacity'){ 

      giftWrap.classList.add('active');
      da.classList.add('active'); 
      net.classList.add('active'); 

    if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }

      cinemaOverlay.classList.remove('fade-in');
      cinemaOverlay.classList.add('fade-out');

}});

da.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'opacity') {
    da.style.pointerEvents = 'auto', net.style.pointerEvents = 'auto' ;
  }
});

let returnTimer;

net.addEventListener('mouseenter', () => {
net.style.transition = "transform 0.3s ease";

  clearTimeout(returnTimer);

  const randomX = Math.random() * 1570 - 1030; 
  const randomY = Math.random() * 920 - 620; 

  net.style.transform = `translate(${randomX}px, ${randomY}px)`;


  returnTimer = setTimeout(() => {
    net.style.transform = 'translate(0px, 0px)';
  }, 3000);

});




toggleBtn.addEventListener("click", () => {


if (document.body.classList.contains("night")) {


    document.body.classList.remove("night");


    toggleBtn.textContent = "🌙";

    document.querySelector("#birthdayCard p").textContent =
      "...";

  } else {

    document.body.classList.add("night");

    toggleBtn.textContent = "☀️";

    document.querySelector("#birthdayCard p").textContent =
      "Твоя уникальность сравнима с кровавой луной, которая появляется лишь в особые моменты. Пусть эта ночь принесёт тебе магию, счастье и исполнение всех желаний 🌙✨"
      "Text..."
      ;
      
    document.querySelector("#birthdayCard2 p").textContent =
      "Я больше ничего не смог придумать. И из-за этого я сейчас дополняю всякой ненужной информацией, чтобы заполнить это поле😅. Еще раз с днюхой шоль!😶‍🌫️🫠"
      "и тут тоже"
      ;
  }

  toggleBtn.remove();

});




