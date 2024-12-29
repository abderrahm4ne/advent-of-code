import fs from 'fs';

function appeared(path){

const data = fs.readFileSync(path, 'utf-8');
const lines = data.trim().split('\n');

const matrix = lines.map(line => line.split(''));

    let ctr = 0;

    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){

            const isInside = i - 1 >= 0 && j - 1 >= 0 && i + 1 < matrix.length && j + 1 < matrix[i].length;
            

            if(isInside){
                
                const topLeftToBottomRight = matrix[i - 1][j - 1] === 'M' && matrix[i][j] === 'A' && matrix[i + 1][j + 1] === 'S';
                const bottomRightToTopLeft = matrix[i + 1][j + 1] === 'M' && matrix[i][j] === 'A' && matrix[i - 1][j - 1] === 'S';
                const bottomLeftToTopRight = matrix[i + 1][j - 1] === 'M' && matrix[i][j] === 'A' && matrix[i - 1][j + 1] === 'S';
                const topRightToBottomLeft = matrix[i - 1][j + 1] === 'M' && matrix[i][j] === 'A' && matrix[i + 1][j - 1] === 'S';
                if( (topLeftToBottomRight && bottomLeftToTopRight) || (topRightToBottomLeft && bottomRightToTopLeft) || (topLeftToBottomRight && topRightToBottomLeft) || (bottomLeftToTopRight && bottomRightToTopLeft)){
                    ctr++;
                }
            }
        }
        
    }
    return ctr;
    
}    
const path = './day4/input.txt';
const result = appeared(path);
console.log(result);