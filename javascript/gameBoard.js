import { chosingItem } from "./workItem.js";
const GAME_BOARD_ROWS = 20;
const GAME_BOARD_COLUMNS = 20;

export function drow(gameboardTemplet, gameBoard) {
    for (let row = 0; row < gameboardTemplet.length; row++) {
        for (let column = 0; column < gameboardTemplet[row].length; column++) {
            addBlock(gameboardTemplet, gameBoard, row, column);
        }
    }
}
function addBlock(gamebordTempet, gameBoard, row, column) {
    switch (gamebordTempet[row][column]) {
        case 0:
            addElement("empty", gameBoard, row, column);
            break;
        case 1:
            addElement('cloud', gameBoard, row, column);
            break;
        case 2:
            addElement("ground", gameBoard, row, column);
            break;
        case 3:
            addElement("grass", gameBoard, row, column);
            break;
        case 4:
            addElement("wood", gameBoard, row, column);
            break;
        case 5:
            addElement("tree-leaves", gameBoard, row, column);
            break;
        case 6:
            addElement("rock", gameBoard, row, column);
            break;
        case 7:
            addElement("lava", gameBoard, row, column);
            break;
    }
}
function addElement(type, gameBoard, row, column) {
    const block = document.createElement('div');
    block.classList.add(type);
    block.classList.add('hover');
    block.classList.add('matrial');
    block.style.gridRowStart = ((row + 1));
    block.style.gridColumnStart = ((column + 1));
    gameBoard.appendChild(block);
}
export function addEventToGrid(gameBoard) {
    gameBoard.addEventListener('click', clickHandle);
}
function clickHandle(e) {
    // let cloudCount = document.querySelector('.cloud-count');
    switch (chosingItem) {
        case 'axe':
            useAxe(e);
            break;
        case 'shovel':
            useShove(e);
            break;
        case 'pickaxe':
            usePickaxe(e);
            break;
        case 'cloud':
            changeIfIsNotEmpty(e, 'cloud');
            break;
        case 'ground':
            changeIfIsNotEmpty(e, "ground");
            break;
        case 'grass':
            changeIfIsNotEmpty(e, "grass");
            break;
        case 'wood':
            changeIfIsNotEmpty(e, "wood");
            break;
        case 'tree-leaves':
            changeIfIsNotEmpty(e, 'tree-leaves');
            break;
        case 'rock':
            changeIfIsNotEmpty(e, "rock");
            break;
        case 'lava':
            changeIfIsNotEmpty(e, 'lava');
            break;
    }
}
function useAxe(e) {
    if (e.target.classList.contains("tree-leaves")) {
        let treeLeavesCount = document.querySelector('.tree-leaves-count');
        updateCountAndChangCssClasses(e, treeLeavesCount, 'tree-leaves', 'empty', '+');
    } else if (e.target.classList.contains("wood")) {
        let woodCount = document.querySelector('.wood-count');
        updateCountAndChangCssClasses(e, woodCount, 'wood', 'empty', '+');
    }
}
function useShove(e) {
    if (e.target.classList.contains("ground")) {
        let groundCount = document.querySelector('.ground-count');
        updateCountAndChangCssClasses(e, groundCount, 'ground', 'empty', '+');
    } else
        if (e.target.classList.contains("grass")) {
            let grassCount = document.querySelector('.grass-count');
            updateCountAndChangCssClasses(e, grassCount, 'grass', 'empty', '+');
        }
}
function usePickaxe(e) {
    if (e.target.classList.contains("rock")) {
        let rocksCount = document.querySelector('.rock-count');
        updateCountAndChangCssClasses(e, rocksCount, 'rock', 'empty', '+');
    }
    if (e.target.classList.contains("lava")) {
        let lavaCount = document.querySelector('.lava-count');
        updateCountAndChangCssClasses(e, lavaCount, 'lava', 'empty', '+');
    }
}
function changeIfIsNotEmpty(e, type) {
    let count = document.querySelector(`.${type}-count`);
    if (e.target.classList.contains("empty") && parseInt(count.textContent) > 0) {
        updateCountAndChangCssClasses(e, count, 'empty', type, '-');
    }
}
function updateCountAndChangCssClasses(event, count, cssClassToRemove, cssClassToAdd, plusOrMinus) {
    event.target.classList.remove(cssClassToRemove);
    event.target.classList.add(cssClassToAdd);
    if (plusOrMinus === "+") {
        count.textContent = parseInt(count.textContent) + 1 + "";
    } else if (plusOrMinus === "-") {
        count.textContent = parseInt(count.textContent) - 1 + "";
    }
}