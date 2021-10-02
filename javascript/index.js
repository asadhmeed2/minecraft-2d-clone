import { drow as drawGameBoard, addEventToGrid } from './gameBoard.js'
import { addEventToWorkItems } from './workItem.js'



function startGame() {
    const gameboardTemplet = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 5, 5, 0, 0, 0],
        [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 5, 4, 5, 0, 5, 5, 5, 0, 0, 0],
        [0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 4, 0, 0, 5, 4, 5, 0, 0, 0],
        [0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 4, 0, 3, 3, 3],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    ]
    initializeStartBtn();
    const gameBoard = document.querySelector('.game-window');
    drawGameBoard(gameboardTemplet, gameBoard);
    addEventToWorkItems();
    addEventToGrid(gameBoard);
    const reloadBtn = document.querySelector('.reload');
    reloadBtn.addEventListener('click', reloadGame);

}
startGame();

function reloadGame() {
    let treeLeavesCount = document.querySelector('.tree-leaves-count');
    let woodCount = document.querySelector('.wood-count');
    let groundCount = document.querySelector('.ground-count');
    let grassCount = document.querySelector('.grass-count');
    let rocksCount = document.querySelector('.rock-count');
    let lavaCount = document.querySelector('.lava-count');
    let cloudCount = document.querySelector('.cloud-count');

    treeLeavesCount.textContent = '0';
    woodCount.textContent = '0';
    groundCount.textContent = '0';
    grassCount.textContent = '0';
    rocksCount.textContent = '0';
    lavaCount.textContent = '0';
    cloudCount.textContent = '0';

    startGame();

}
function initializeStartBtn() {
    const startBtn = document.querySelector('.startPageBtn');
    const startpage = document.querySelector('.startPageContainer');
    console.log(startpage.style.zIndex);
    startBtn.addEventListener("click", () => {

        startpage.style.zIndex = "-1";
        startpage.style.opacity = "0";
    }
    );
}


