
const WORLD_HEIGHT = 20;
const WORLD_WIDTH = 27;
export function generatGameBoard() {
    let worldArrayTemplate = generatZerosTemplate()
    worldArrayTemplate = generatCloud(worldArrayTemplate, 4);
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





function generatCloud(worldArrayTemplate, startCloud) {
    let cloudHeight = Math.floor(Math.random() * 3);
    console.log(cloudHeight);
    let cloudTemplate = cloudTemplateGenerater();
    console.log(cloudTemplate);
    for (let index = 0; index < Math.floor(1 + worldArrayTemplate[startCloud].length / 7); index++) {
        let startCloudIndex = Math.floor(Math.random() * (WORLD_WIDTH - 7));
        console.log(startCloudIndex);
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
        console.log(startPositionInRow);
        let numberOfCloudBlocks = Math.floor(Math.random() * (cloudTemplate[row].length - startPositionInRow));
        console.log(numberOfCloudBlocks);
        for (let column = startPositionInRow; column < (startPositionInRow + numberOfCloudBlocks); column++) {
            cloudTemplate[row][column] = 1;
        }
    }
    return cloudTemplate;
}

function addCloudToWorldTemplate(startCloudIndex, cloudHeight, worldArrayTemplate, cloudTemplate) {
    let template = [...worldArrayTemplate]
    console.log(cloudHeight);
    console.log(startCloudIndex);
    for (let row = 0; row < cloudTemplate.length; row++) {
        for (let column = 0; column < cloudTemplate[row].length; column++) {
            console.log(cloudTemplate);
            console.log(cloudTemplate[row][column]);
            template[cloudHeight + 1 + row][startCloudIndex + column] = cloudTemplate[row][column];
        }
    }
    console.log(template);
    return worldArrayTemplate;

}
