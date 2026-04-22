function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5549985045188'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

const cards = document.querySelectorAll('.projetos_card');

cards.forEach(card => {

    const conteudo = card.querySelector('.card');

    card.addEventListener('click', (e) => {

        if (e.target.closest('a')) return;

        const isOpen = conteudo.style.maxHeight && conteudo.style.maxHeight !== "0px";

        document.querySelectorAll('.card').forEach(el => {
            el.style.maxHeight = "0px";
        });

        if (!isOpen) {
            conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        }
    });
});

const titulo = document.querySelector('.titulo');
const dominio = document.getElementById('dominio');
const estrelasBg = document.getElementById('estrelas-bg');

const audio = new Audio('./audio/muryokusho.wav');

let ativo = false;
let estrelasCriadas = false;

titulo.addEventListener('click', () =>{
    if(ativo) return;

    ativo = true;

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        ativarDominio();
    }, 2000);
});

function ativarDominio(){
    dominio.classList.add('ativo');

    if(!estrelasCriadas){
        criarEstrelas();
        estrelasCriadas = true;
    }

    document.body.classList.add('estrelas-ativadas');

    document.body.classList.add('fundo-alterado');

    animarEstrelas();

    setTimeout(() => {
        dominio.classList.remove('ativo');
        ativo = false;
    }, 5000);
}

function criarEstrelas(){
    for(let i = 0; i<80; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');

        const size = Math.random() * 3 + 1;

        estrela.style.width = size +'px';
        estrela.style.height = size +'px';

        estrela.style.top = Math.random() *100 + '%';
        estrela.style.left = Math.random() * 100 + '%';

        estrelasBg.appendChild(estrela);
    }
}

function animarEstrelas(){
    const estrelas = document.querySelectorAll('.estrela');

    estrelas.forEach(estrela =>{
        const x = (Math.random() - 0.5) * 300; 
        const y = (Math.random() - 0.5) * 300; 

        estrela.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
        estrela.style.transition = "transform 4s ease-out";
    })
}