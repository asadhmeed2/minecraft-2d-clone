
const WORLD_HEIGHT = 20;
const WORLD_WIDTH = 27;
/**
 * 
 * @returns updated game world template (for future updates and changing)
 */
export function generatGameBoard() {
    let worldArrayTemplate = generatZerosTemplate()
    generatCloud(worldArrayTemplate, 4);
    generatTree(worldArrayTemplate, 13);
    generatRocks(worldArrayTemplate, 13);
    generatGrass(worldArrayTemplate, 14);
    generatUderGround(worldArrayTemplate, 15);
    generateLava(worldArrayTemplate, 19);
    return worldArrayTemplate;
}

/**
 * 
 * @returns 2d array filled with zeros;
 * initiat the 2d array that contains the world template to zeros which indicates that the block in empty with no background style
 */
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

/**
 * 
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} treeStart the layer of the starting point of the trees in the game world
 * @returns updated game world template (for future updates and changing)
 */
function generatTree(worldArrayTemplate, treeStart) {
    let treeTemplate = [[5, 5, 5],
    [5, 5, 5],
    [5, 4, 5],
    [0, 4, 0],
    [0, 4, 0]]//tree template
    for (let row = 0; row < 4; row++) {
        let randomTree = 2 + Math.floor(4 + Math.random() * (worldArrayTemplate[treeStart].length - 8));
        while (worldArrayTemplate[treeStart][randomTree] === 4 || worldArrayTemplate[treeStart][randomTree + 1] === 4 || worldArrayTemplate[treeStart][randomTree - 1] === 4) {
            randomTree = 2 + Math.floor(row + Math.random() * worldArrayTemplate[treeStart].length - 4);
        }
        createTree(treeTemplate, worldArrayTemplate, randomTree - 1, treeStart);
    }
    return (worldArrayTemplate)
}
/**
 * 
 * @param {*} treeTemplate 2d array of the tree shape in numbers  
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} randomTree randome column number in the world layer
 * @param {*} treeStart the layer number in the world that the tree starting at
 * @returns updated game world template (for future updates and changing)
 */
function createTree(treeTemplate, worldArrayTemplate, randomTree, treeStart) {
    for (let index = 0; index < treeTemplate.length; index++) {
        for (let column = 0; column < 3; column++) {
            worldArrayTemplate[treeStart - 4 + index][randomTree + column] = treeTemplate[index][column];
        }
    }
    return worldArrayTemplate;
}

/**
 *
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} treeStart the layer of the starting point of the cloud in the game world
 * @returns updated game world template (for future updates and changing)
 * the cloud have 3 different heights 
 */
function generatCloud(worldArrayTemplate, startCloud) {
    let cloudTemplate = cloudTemplateGenerater();
    for (let index = 0; index < Math.floor(1 + worldArrayTemplate[startCloud].length / 7); index++) {
        let cloudHeight = Math.floor(Math.random() * 3);// random cloud height
        let startCloudIndex = Math.floor(Math.random() * (WORLD_WIDTH - 7)); //random cloud starting index in the world layer
        worldArrayTemplate = addCloudToWorldTemplate(startCloudIndex, cloudHeight, worldArrayTemplate, cloudTemplate);
    }
    return worldArrayTemplate;
}
/**
 * 
 * @param {*} startCloudIndex random cloud starting index in the world layer
 * @param {*} cloudHeight  random cloud height
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} cloudTemplate random structured cloud template 
 * @returns updated game world template (for future updates and changing)
 */
function addCloudToWorldTemplate(startCloudIndex, cloudHeight, worldArrayTemplate, cloudTemplate) {
    let template = [...worldArrayTemplate]
    for (let row = 0; row < cloudTemplate.length; row++) {
        for (let column = 0; column < cloudTemplate[row].length; column++) {
            template[cloudHeight + 1 + row][startCloudIndex + column] = cloudTemplate[row][column];
        }
    }
    return worldArrayTemplate;

}
/**
 * 
 * @returns random structured cloud template 
 */
function cloudTemplateGenerater() {
    let cloudTemplate =
        [[0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]]
    for (let row = 0; row < cloudTemplate.length; row++) {
        let startPositionInRow = Math.floor(Math.random() * cloudTemplate[row].length / 2);// random cloud starting position
        let numberOfCloudBlocks = Math.floor(Math.random() * (cloudTemplate[row].length - startPositionInRow));// number of cloud blocks in cloud template row
        for (let column = startPositionInRow; column < (startPositionInRow + numberOfCloudBlocks); column++) {
            cloudTemplate[row][column] = 1;
        }
    }
    return cloudTemplate;
}
/**
 * 
 * @param {*} worldArrayTemplate  2D array templet of the game world
 * @param {*} rocksHeight the layer of the starting point of the cloud in the game world
 * @returns 
 */
function generatRocks(worldArrayTemplate, rocksHeight) {
    for (let index = 0; index < 7; index++) {
        let rocksStartIndex = 2 + Math.floor(Math.random() * worldArrayTemplate[rocksHeight].length - 5);
        if (worldArrayTemplate[rocksHeight][rocksStartIndex] !== 4) {
            worldArrayTemplate[rocksHeight][rocksStartIndex] = 6;
            if (worldArrayTemplate[rocksHeight][rocksStartIndex + 1] === 6 && worldArrayTemplate[rocksHeight][rocksStartIndex - 1] !== 4 || worldArrayTemplate[rocksHeight][rocksStartIndex - 1] === 6 && worldArrayTemplate[rocksHeight][rocksStartIndex + 1] !== 4) {
                worldArrayTemplate[rocksHeight - 1][rocksStartIndex] = 6;
            }
        }

    }
    return worldArrayTemplate;
}
/**
 * 
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} grassHeight the layer of the starting point of the grass in the game world
 * @returns updated game world template (for future updates and changing)
 */
function generatGrass(worldArrayTemplate, grassHeight) {
    for (let index = 0; index < worldArrayTemplate[grassHeight].length; index++) {
        if (worldArrayTemplate[grassHeight - 1][index] === 4) {
            worldArrayTemplate[grassHeight][index] = 2;
        } else {
            worldArrayTemplate[grassHeight][index] = 3;
        }
    }
    return worldArrayTemplate;
}
/**
 * 
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} underGroundFirstLayer the starting layer of the dirt and randomis underground rocks in the game world
 * @returns updated game world template (for future updates and changing)
 */
function generatUderGround(worldArrayTemplate, underGroundFirstLayer) {
    for (let layer = underGroundFirstLayer; layer < underGroundFirstLayer + 4; layer++) {
        let rocksNumberInLayer = Math.floor(Math.random() * WORLD_WIDTH);
        for (let index = 0; index < worldArrayTemplate[layer].length; index++) {//intiate the layer with dirt blocks
            worldArrayTemplate[layer][index] = 2;
        }
        for (let column = 0; column <= rocksNumberInLayer; column++) { //fill part the layer with rocks in random order 
            let randomColumn = Math.floor(Math.random() * WORLD_WIDTH);
            worldArrayTemplate[layer][randomColumn] = 6;
        }
    }
    return worldArrayTemplate;
}
/**
 * 
 * @param {*} worldArrayTemplate 2D array templet of the game world
 * @param {*} underGroundLayer the starting layer of the lava in the game world
 * @returns updated game world template (for future updates and changing)
 */
function generateLava(worldArrayTemplate, underGroundLayer) {
    for (let clomn = 0; clomn < WORLD_WIDTH; clomn++) {
        worldArrayTemplate[underGroundLayer][clomn] = 7;
    }
    return worldArrayTemplate;
}


