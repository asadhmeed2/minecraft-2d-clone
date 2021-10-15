
const WORLD_HEIGHT = 20;
const WORLD_WIDTH = 27;
export function generatGameBoard() {
    let worldArrayTemplate = generatZerosTemplate()
    worldArrayTemplate = generatCloud(worldArrayTemplate, 4);
    worldArrayTemplate = generatTree(worldArrayTemplate, 13);
    console.log(worldArrayTemplate);
    return worldArrayTemplate;
}

function generatZerosTemplate() {
    let templateArray = []
    for (let row = 0; row < WORLD_HEIGHT; row++) {
        let rowArray = [];
        for (let clomn = 0; clomn < WORLD_WIDTH; clomn++) {
            rowArray = [...rowArray, 0];
        }
        templateArray = [...templateArray, rowArray];
    }
    return templateArray;
}


function generatTree(worldArrayTemplate, treeStart) {
    let treeTemplate = [[5, 5, 5],
    [5, 5, 5],
    [5, 4, 5],
    [0, 4, 0],
    [0, 4, 0]]
    for (let row = 0; row < 7; row++) {
        let randomTree = 2 + Math.floor(4 + Math.random() * (worldArrayTemplate[treeStart].length - 8));
        console.log(randomTree);
        console.log(treeStart - 4);
        console.log(worldArrayTemplate[treeStart - 4][randomTree]);
        console.log(worldArrayTemplate[treeStart - 4][randomTree - 1]);
        console.log(worldArrayTemplate[treeStart - 4][randomTree + 1]);
        if(worldArrayTemplate[treeStart][randomTree] !== 4 && worldArrayTemplate[treeStart][randomTree + 1] !== 4 && worldArrayTemplate[treeStart][randomTree-1] !== 4){
            randomTree = 2 + Math.floor(row + Math.random() * worldArrayTemplate[treeStart].length - 4);
        }
        createTree(treeTemplate, worldArrayTemplate, randomTree - 1, treeStart);
    }
    return (worldArrayTemplate)
}
function createTree(treeTemplate, worldArrayTemplate, randomTree, treeStart) {
    for (let index = 0; index < treeTemplate.length; index++) {
        for (let column = 0; column < 3; column++) {
            console.log(randomTree + column);
            console.log(`in row :${treeStart - 4 - index} and column:${randomTree + column}`, treeTemplate[index][column]);
            // console.log(treeTemplate[index - treeStart - 4][column]);
            worldArrayTemplate[treeStart - 4 + index][randomTree + column] = treeTemplate[index][column];
        }
    }
    console.log(worldArrayTemplate);
    return worldArrayTemplate;
}

function generatCloud(worldArrayTemplate, startCloud) {
    let cloudTemplate = cloudTemplateGenerater();
    for (let index = 0; index < Math.floor(1 + worldArrayTemplate[startCloud].length / 7); index++) {
        let cloudHeight = Math.floor(Math.random() * 3);
        let startCloudIndex = Math.floor(Math.random() * (WORLD_WIDTH - 7));
        worldArrayTemplate = addCloudToWorldTemplate(startCloudIndex, cloudHeight, worldArrayTemplate, cloudTemplate);
    }
    return worldArrayTemplate;
}



function cloudTemplateGenerater() {
    let cloudTemplate =
        [[0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]]
    for (let row = 0; row < cloudTemplate.length; row++) {
        let startPositionInRow = Math.floor(Math.random() * cloudTemplate[row].length / 2);
        let numberOfCloudBlocks = Math.floor(Math.random() * (cloudTemplate[row].length - startPositionInRow));
        for (let column = startPositionInRow; column < (startPositionInRow + numberOfCloudBlocks); column++) {
            cloudTemplate[row][column] = 1;
        }
    }
    return cloudTemplate;
}

function addCloudToWorldTemplate(startCloudIndex, cloudHeight, worldArrayTemplate, cloudTemplate) {
    let template = [...worldArrayTemplate]
    for (let row = 0; row < cloudTemplate.length; row++) {
        for (let column = 0; column < cloudTemplate[row].length; column++) {
            template[cloudHeight + 1 + row][startCloudIndex + column] = cloudTemplate[row][column];
        }
    }
    return worldArrayTemplate;

}
