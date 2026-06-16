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








// projetos 

const cards = document.querySelectorAll(".projetos_card");
let current = 0;
let timer;

function updateCarousel() {

    cards.forEach((card) => {
        card.classList.remove("left", "active", "right");
    })

    const leftIndex = (current -1 + cards.length) % cards.length;

    const rightIndex = (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[leftIndex].classList.add("left");
    cards[rightIndex].classList.add("right");
}

updateCarousel()
iniciarRotacao()

function iniciarRotacao(){
    clearInterval(timer)

    timer = setInterval(()=>{
        current++

        if(current >= cards.length){
            current = 0
        }

        updateCarousel()
    }, 25000)
}

cards.forEach((card, index) => {
    card.addEventListener("click", () =>{

        if(card.classList.contains("left")){
            current --;

            if(current < 0){
                current = cards.length - 1
            }

            document.querySelectorAll(".bubble_item").forEach((item) => {
                item.classList.remove("expandido")
            })

            updateCarousel()
        }

        else if(card.classList.contains("right")){
            current ++;

            if(current >= cards.length){
                current = 0
            }

            document.querySelectorAll(".bubble_item").forEach((item) => {
                item.classList.remove("expandido")
            })

            updateCarousel()
        } 
    })
})

const bubbleItens = document.querySelectorAll(".bubble_item")

bubbleItens.forEach((item) => {

    const bubble = item.querySelector(".bubble")

    bubble.addEventListener("click", (event) => {

        event.stopPropagation()

        clearInterval(timer)

        document.querySelectorAll(".bubble_item").forEach((outroItem) => {
            outroItem.classList.remove("expandido")
        })

        item.classList.add("expandido")
    })
})

const overlays = document.querySelectorAll(".overlay")

overlays.forEach((overlay) => {
    overlay.addEventListener("click", (event)=> {
        document.querySelectorAll(".bubble_item").forEach((item) => {
            item.classList.remove("expandido")
        })
        iniciarRotacao()
    })
})
document.addEventListener("click", () => {

    document.querySelectorAll(".bubble_item").forEach((item) => {
        item.classList.remove("expandido")
    })
})






// dominio
const fotoPerfil = document.getElementById("fotoPerfil");
const nomePerfil = document.getElementById("nomePerfil");
const descricaoPerfil = document.getElementById("descricaoPerfil");
const textoSobre = document.getElementById("textoSobre");
let modoArashii = false


const titulo = document.querySelector('.titulo');
const dominio = document.getElementById('dominio');
const estrelasBg = document.getElementById('estrelas-bg');

let ativo = false;
let estrelasCriadas = false;

titulo.addEventListener('click', () =>{
    if(ativo) return;

    ativo = true;

    setTimeout(() => {
        ativarDominio();
    }, 500);
});

function trocarPerfil(){
    modoArashii = !modoArashii;

    if(modoArashii){
        fotoPerfil.src = "img/Subarashii_newEra.png"

        nomePerfil.textContent = "Subarashii"

        descricaoPerfil.textContent = "Programador por Diversão"

        textoSobre.innerHTML = `
            <p>
                Desenvolvedor profissional de ideias questionáveis, sistemas improváveis e projetos que definitivamente começaram como uma brincadeira.
            </p>

            <p>
                Especialista em abrir vinte abas, iniciar quinze projetos e terminar pelo menos três deles.
            </p>

            <p>
                Futuro fundador da Nyxs Corporation, criador do Sunshine e defensor oficial da frase "confia que vai funcionar".
            </p>

            <p>
                Se algo parecer estranho, provavelmente foi intencional. Se parecer genial, também.
            </p>

            <p>
                C'mon... don't be nervous.
            </p>
        `;
    }else{
        fotoPerfil.src = "img/Arthur_newEra.png"

        nomePerfil.textContent = "Arthur Godoy Caminski"

        descricaoPerfil.textContent = "Desenvolvedor Full Stack"

        textoSobre.innerHTML = `
            <p>
                Olá! Sou Arthur Godoy Caminski, estudante de Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia.
            </p>

            <p>
                Atualmente desenvolvo projetos próprios voltados para backend, frontend e automação, sempre buscando aprender novas ferramentas e técnicas.
            </p>

            <p>
                Meu principal interesse está na integração entre software e hardware, especialmente nas áreas de robótica, mecatrônica e sistemas inteligentes.
            </p>

            <p>
                Acredito que a melhor forma de evoluir é construir. Por isso estou constantemente criando projetos, experimentando ideias e transformando conceitos em algo funcional.
            </p>

            <p>
                Este portfólio reúne parte dessa jornada — e também alguns dos projetos maiores que ainda estão por vir.
            </p>
        `;
    }
}

function ativarDominio(){
    dominio.classList.add('ativo');

    setTimeout(() => {
        trocarPerfil();

        glitchText(nomePerfil, modoArashii
            ?"subarashii"
            :"Arthur Godoy Caminski"
        );

        glitchText(descricaoPerfil, modoArashii
            ?"Programador por Diversão"
            :"Desenvolvedor Full Stack"
        )

        document.body.classList.toggle('estrelas-ativadas');
        document.body.classList.toggle('fundo-alterado');

        document.body.classList.remove("glitch")

    }, 500)

    if(!estrelasCriadas){
        criarEstrelas();
        estrelasCriadas = true;
    }

    animarEstrelas();

    setTimeout(() => {
        dominio.classList.remove('ativo');
        ativo = false;
    }, 1000);
}

function criarEstrelas(){
    for(let i = 0; i<60; i++) {
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

//glitch

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!&";

function glitchText(element, finalText, duration = 700){
    let frame = 0;
    const totalFrames = Math.max(1, Math.floor(duration/40))

    const interval = setInterval(() => {
        frame++;

        const progress = frame/totalFrames
        const revealCount = Math.floor(finalText.length * progress)

        let output = ""

        for(let i = 0; i< finalText.length; i++){
            if(i<revealCount){
                output += finalText[i]
            }else{
                output += chars[
                    Math.floor(Math.random() * chars.length)
                ]
            }
        }
        element.textContent = output;

        if(frame >= totalFrames){
            clearInterval(interval)
            element.textContent = finalText
        }
    }, 40);
}

//loadingBar

window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen")

    setTimeout(() => {
        loadingScreen.classList.add("hidden")

        setTimeout(() => {
            loadingScreen.remove()
        }, 800)
    }, 2200)
})

const loadingText = document.getElementById("loading-text")

const mensagens = [
    "INITIALIZING SYSTEM...",
    "CONNECTING TO NYXS...",
    "LOADING PROJECT DATABASE...",
    "ACCESS GRANTED"
]

let i = 0

const intervalo = setInterval(() => {
    loadingText.textContent = mensagens[i]

    i++;

    if(i >= mensagens.length){
        clearInterval(intervalo)
    }
}, 500)

// cursor

const dot = document.querySelector(".cursor-dot")
const ring = document.querySelector(".cursor-ring")

let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", e => {
    mouseX = e.clientX
    mouseY = e.clientY

    dot.style.left = mouseX + "px"
    dot.style.top = mouseY + "px"
})

let ringX = 0
let ringY = 0

function animateCursor(){
    ringX += (mouseX - ringX) * 0.15
    ringY += (mouseY - ringY) * 0.15

    ring.style.left = ringX + "px"
    ring.style.top = ringY + "px"

    requestAnimationFrame(animateCursor)
}

animateCursor()

const clickable = document.querySelectorAll(
    "a, button, .clickable"
)

clickable.forEach(item => {
    item.addEventListener("mouseenter", () => {
        dot.style.opacity = "0"

        ring.style.width = "50px"
        ring.style.height = "50px"
    })

    item.addEventListener("mouseleave", () =>{
        dot.style.opacity = "1"

        ring.style.width = "32px"
        ring.style.height = "32px"
    })
})

console.log(dot)
console.log(ring)