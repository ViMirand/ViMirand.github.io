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

// Substitua YOUR_PUBLIC_KEY pela sua chave pública

console.log('Script carregado');

// Inicialize o EmailJS com sua chave pública
emailjs.init("KY8NUkwrhxS9AhzyO");

function msg(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Message:', message);

    // Envie o e-mail usando EmailJS
    emailjs.send('service_rbzqonk', 'template_63ue429', {
        from_name: name,
        from_email: email,
        message_html: message
    })
    .then(function(response) {
        console.log('Sucesso:', response);
        alert('Formulário enviado com sucesso!!');
    }, function(error) {
        console.error('Erro:', error);
        alert('Falha ao enviar o e-mail.');
    });

    return false;
}