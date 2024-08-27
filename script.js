const colors={
    1: '#a52a2a',
    2: '#ff00482c',
    3: '#faebd7',
    4: '#d317502c',
    5: '#faebd780',
    6: '#d31750'
}

function createFallingItem() {
const container = document.getElementById('personal');
const item = document.createElement('div');
const screenWidth = window.innerWidth;

item.classList.add('item');

// Definir a posição inicial aleatória
item.style.left = Math.random() * window.innerWidth + 'px';

// Definir uma transformação inicial e opacidade
item.style.transform = `translateY(-50px) rotate(${Math.random() * 360}deg)`;
item.style.opacity = 1;

const colorKeys = Object.keys(colors);
const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
const tempoRemocao = screenWidth < 765 ? 2500 : 3800;
item.style.backgroundColor = colors[randomKey];

container.appendChild(item);

// Aplicar a transformação e mudar a opacidade ao longo do tempo
setTimeout(() => {
    item.style.transition = 'transform 9s linear, opacity 8s linear';
    item.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
}, 50);

// Remover o item após a animação
setTimeout(() => {
    container.removeChild(item);
}, tempoRemocao);
}

// Criar itens a cada 1 segundo
setInterval(createFallingItem, 100);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
