

export let chosingItem = ""
const axe = document.querySelector('.axe');
const pickaxe = document.querySelector('.pickaxe');
const shovel = document.querySelector('.shovel');
const cloud = document.querySelector('.cloud');
const ground = document.querySelector('.ground');
const grass = document.querySelector('.grass');
const wood = document.querySelector('.wood');
const treeLeaves = document.querySelector('.tree-leaves');
const rocks = document.querySelector('.rock');
const lava = document.querySelector('.lava');

function itemChoosing(itemName) {
    if (chosingItem.length > 0) {
        let lastChosingItem = document.querySelector(`.${chosingItem}`);
        let nextChosingItem = document.querySelector(`.${itemName}`);
        lastChosingItem.classList.remove('active');
        nextChosingItem.classList.add('active');
        chosingItem = itemName;
    } else {
        let nextChosingItem = document.querySelector(`.${itemName}`);
        nextChosingItem.classList.add('active');
        chosingItem = itemName;
    }
}
export function addEventToWorkItems() {
    if (chosingItem.length > 0) {
        let lastChosingItem = document.querySelector(`.${chosingItem}`);
        lastChosingItem.classList.remove('active');
    }
    chosingItem = "";
    axe.addEventListener('click', () => itemChoosing("axe"));
    pickaxe.addEventListener('click', () => itemChoosing("pickaxe"));
    shovel.addEventListener('click', () => itemChoosing("shovel"));
    cloud.addEventListener('click', () => itemChoosing("cloud"));
    ground.addEventListener('click', () => itemChoosing("ground"));
    grass.addEventListener('click', () => itemChoosing("grass"));
    wood.addEventListener('click', () => itemChoosing("wood"));
    treeLeaves.addEventListener('click', () => itemChoosing("tree-leaves"));
    rocks.addEventListener('click', () => itemChoosing("rock"));
    lava.addEventListener('click', () => itemChoosing("lava"));
}
