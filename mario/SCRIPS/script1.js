const quemario = document.querySelector('.QUE-MÁRIO');
const tubo = document.querySelector('.tubo');

function pulo() {
    quemario.classList.add('pulo');

    setTimeout(() => {
        quemario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft;
    const posicaoMario = +window.getComputedStyle(quemario).bottom.replace('px', '');

    if (posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80) {
        tubo.style.animation = "none";
        tubo.style.left = `${posicaoTubo}px`;

        quemario.style.animation = "none";
        quemario.style.bottom = `${posicaoMario}px`;

        quemario.src='../STYLE/imagens/Mario morre.png';


        quemario.style.width = '75px';

        clearInterval(loop);

        //alert('PERDEU HAAAAAHAAAAAHÁÁÁÁÁÁÁÁ')
    }

}, 10);

document.addEventListener('keydown', pulo);