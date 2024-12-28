import fs from 'fs';

function appeared(path){

const data = fs.readFileSync(path, 'utf-8');
const lines = data.trim().split('\n');

const matrix = lines.map(line => line.split(''));

    let ctr = 0;

    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            
            if(j + 3 < matrix[i].length && (matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i][j + 3]) === 'XMAS'){
                ctr ++;
            }   // forwards
            else if(j - 3 >= 0 && (matrix[i][j] + matrix[i][j - 1] + matrix[i][j - 2] + matrix[i][j - 3]) === 'XMAS'){
                ctr ++;
            }   // backwards
            else if(i + 3 < matrix.length && (matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] + matrix[i + 3][j]) === 'XMAS'){
                ctr++;
            }   // down
            else if(i - 3 >= 0 && (matrix[i][j] + matrix[i - 1][j] + matrix[i - 2][j] + matrix[i - 3][j]) === 'XMAS'){
                ctr++;
            }   //up
            else if(i + 3 < matrix.length && j + 3 < matrix[i].length && (matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2] + matrix[i + 3][j + 3]) === 'XMAS'){
                ctr++;
            }   //dia down right
            else if(i - 3 >= 0 && j + 3 < matrix[i].length && (matrix[i][j] + matrix[i - 1][j + 1] + matrix[i - 2][j + 2] + matrix[i - 3][j + 3]) === 'XMAS'){
                ctr++;
            }   //dia up right
            else if(i + 3 < matrix.length && j - 3>= 0 && (matrix[i][j] + matrix[i + 1][j - 1] + matrix[i + 2][j - 2] + matrix[i + 3][j - 3]) === 'XMAS'){
                ctr++;
            }   // dia down left
            else if(i - 3 >= 0 && j - 3 >= 0 &&  (matrix[i][j] + matrix[i -1][j - 1] + matrix[i - 2][j - 2] + matrix[i - 3][j - 3]) === 'XMAS'){
                ctr++;
            }   // dia up left      
        }
    }
    return ctr;
}


const path = './day4/input.txt';
const result = appeared(path);
console.log(result);