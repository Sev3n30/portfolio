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
const tickerTop = document.getElementById('tickerTop');
const tickerBottom = document.getElementById('tickerBottom');
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
            ?"Subarashii"
            :"Arthur Godoy Caminski"
        );

        glitchText(descricaoPerfil, modoArashii
            ?"Programador por Diversão"
            :"Desenvolvedor Full Stack"
        )

        glitchText(tickerTop, modoArashii
            ?"◆ C'MON, DON'T BE NERVOUS ◆ NAH, I'D WIN ◆ NYXS CORPORATION ESTÁ OBSERVANDO ◆ 27 PROJETOS INICIADOS ◆ 2 FINALIZADOS ◆ PROPORÇÃO PERFEITAMENTE ACEITÁVEL ◆ O BUG NÃO É UM BUG • É UMA FEATURE ◆ REALIDADE OPCIONAL ◆ SUNSHINE ESTÁ VIVO? ◆ TALVEZ ◆ GOJO APROVARIA ESTE CÓDIGO ◆ DESAFIE O SPACE INVADERS ◆ O FLAPPY PROJECT SOBREVIVEU MAIS UMA SEMANA ◆ C'MON, DON'T BE NERVOUS ◆ NAH, I'D WIN ◆"
            :"◆ PROTOCOLO ARTHUR ONLINE ◆ SPACE INVADERS DISPONÍVEL PARA DESAFIANTES ◆ FLAPPY PROJECT EM DESENVOLVIMENTO ATIVO ◆ PROJETOS FRONTEND INTERATIVOS ◆ SISTEMAS EXPERIMENTAIS EM TESTE ◆ ACESSE O GITHUB PARA MAIS DETALHES ◆ ADS • ANÁLISE E DESENVOLVIMENTO DE SISTEMAS ◆ EXPLORANDO BACKEND E FRONTEND ◆ CADA PROJETO É UMA NOVA EXPERIMENTAÇÃO ◆ DESENVOLVIMENTO DE APLICAÇÕES WEB MODERNAS ◆ SUNSHINE E NYNX CONTINUAM EVOLUINDO ◆ PROTOCOLO ARTHUR ONLINE ◆ SPACE INVADERS DISPONÍVEL PARA DESAFIANTES ◆ FLAPPY PROJECT EM DESENVOLVIMENTO ATIVO ◆ PROJETOS FRONTEND INTERATIVOS ◆ SISTEMAS EXPERIMENTAIS EM TESTE ◆"
        )

        glitchText(tickerBottom, modoArashii
            ?"◆ SISTEMA OPERANDO ALÉM DOS LIMITES RECOMENDADOS ◆ NÍVEL DE CAFÉ: CRÍTICO ◆ CHANCES DE CRIAR MAIS UM PROJETO: 98.7% ◆ NYNX CORPORATION RECRUTANDO SONHADORES ◆ SUNSHINE CORE CARREGANDO ◆ ERROS FORAM IGNORADOS COM SUCESSO ◆ O FRONTEND SOBREVIVEU ◆ O BACKEND TAMBÉM ◆ O BANCO DE DADOS AINDA RESPIRA ◆ A REALIDADE É APENAS UMA SUGESTÃO ◆ SISTEMA OPERANDO ALÉM DOS LIMITES RECOMENDADOS ◆ NÍVEL DE CAFÉ: CRÍTICO ◆"
            :"◆ SUNSHINE PROJECT • STATUS OPERACIONAL 46% ◆ NYNX ENTITY • DESENVOLVIMENTO CONTÍNUO ◆ HTML • CSS • JAVASCRIPT ◆ NODE.JS • MYSQL • APIs ◆ FULL STACK EM TREINAMENTO CONSTANTE ◆ AUTOMAÇÃO DE PROCESSOS E SISTEMAS ◆ DESENVOLVIMENTO DE BOTS PARA DISCORD ◆ ROBÓTICA E MECATRÔNICA COMO OBJETIVO PRINCIPAL ◆ APRENDIZADO CONTÍNUO ATIVADO ◆ NOVAS FUNCIONALIDADES EM PESQUISA ◆ TECNOLOGIA • CRIATIVIDADE • EXPERIMENTAÇÃO ◆ SUNSHINE PROJECT • STATUS OPERACIONAL 46% ◆ NYNX ENTITY • DESENVOLVIMENTO CONTÍNUO ◆ HTML • CSS • JAVASCRIPT ◆ NODE.JS • MYSQL • APIs ◆"
        )

        glitchText()

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
    }, 60);
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

        ring.classList.add('hover')
    })

    item.addEventListener("mouseleave", () =>{
        dot.style.opacity = "1"

        ring.classList.remove('hover')
    })
})

console.log(dot)
console.log(ring)


//inative

let idleTime = 0

setInterval(() => {
    idleTime++;
},1000)

document.addEventListener("mousemove", resetIdle)
document.addEventListener("keydown", resetIdle)
document.addEventListener("click", resetIdle)
document.getElementById("afk-overlay")

function resetIdle(){
    idleTime = 0

    document
        .getElementById("afk-overlay")
        .classList.remove("active");

    document
        .querySelectorAll(".afk-message")
        .forEach(el => el.remove());
}

setInterval(() => {
    if(idleTime === 30){
        ativarAFK();
        mostrarMensagemAFK("ARE YOU STILL THERE?");
    }

    if(idleTime === 45){
        mostrarMensagemAFK("I CAN SEE YOU.");
    }

    if(idleTime === 60){
        mostrarMensagemAFK("DON'T BE NERVOUS.");
    }

    if(idleTime === 90){
        mostrarMensagemAFK(":)");
    }

    if(idleTime === 180){
        mostrarMensagemAFK("OKAY, THIS IS BORING");
    }
}, 1000)

function mostrarMensagemAFK(texto){
    const mensagem = document.createElement('div');

    mensagem.classList.add('afk-message')

    let i = 0;

        const glitch = setInterval(() => {

            mensagem.textContent =
                texto
                    .split("")
                    .map(char =>
                        Math.random() > 0.8
                            ? "!@#$%&*?".charAt(
                                Math.floor(Math.random()*8)
                            )
                            : char
                    )
                    .join("");

            i++;

            if(i > 20){
                clearInterval(glitch);
                mensagem.textContent = texto;
            }

        },50);

    document.body.appendChild(mensagem)

    setTimeout(() => {
        mensagem.remove()
    }, 5000)
}

function ativarAFK(){

    document
        .getElementById("afk-overlay")
        .classList.add("active");
}