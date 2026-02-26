//pegando a propiedade de mario
const mario = document.querySelector('.mario');
//pegando a propiedade do tubo (pipe)
const pipe = document.querySelector('.pipe');

//pegando a classe clouds no css
const clouds = document.querySelector('.clouds')

//pegando elementos da imagem de ame over e botao de restart
const gameOverImg = document.querySelector('.game-over');
const restartBtn = document.querySelector('.restart');

const jump = () => {
    mario.classList.add('jump');

    //tirando a funçao de jump pra ele realizar um loop de colocar e tirar sempre JUMP
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft; //verifiando o log da posição que se encontra o pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = window.getComputedStyle(clouds).right;

    
    // SE O PIPE ESTIVER NA POSIÇAO X a animaçao dele vai parar na mesma posiçao
    if (pipePosition <= 120 && pipePosition> 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        //animaçao do mario PARA e ele fica na mesma posiçao
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        //troca a imagem do mario para de game over
        mario.src = 'img/game_over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // parando a animação das nuvens 
        clouds.style.animation = 'none';
        clouds.style.right = cloudsPosition;

            // IMAGEM GAME OVER BOTTOM RESTART
        gameOverImg.style.display = 'block';
        restartBtn.style.display = 'block';

    }
}, 10)


document.addEventListener('keydown', jump);
restartBtn.addEventListener('click', () => {
    location.reload();
});
