import fs from 'fs';

function sumOfMul(path) {
    let safeRep = 0;
    const data = fs.readFileSync(path, 'utf-8');
    const pattern = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

    let sum = 0;
    let toDo = true ;
    for(let match of data.matchAll(pattern)){

        if(match[0].startsWith("mul")){
            if(toDo){
                let x = parseInt(match[1]);
                let y = parseInt(match[2]);

                sum += x * y;
            }
        }
        else if( match[0] === "do()"){
            toDo = true;
        }
        else if ( match[0] === "don't()"){
            toDo = false;
        }
    }

    return sum ;
}

const path = './day3/input.txt';
let result = sumOfMul(path);
console.log(result);