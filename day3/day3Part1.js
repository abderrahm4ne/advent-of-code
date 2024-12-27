import fs from 'fs';

function sumOfMul(path) {
    let safeRep = 0;
    const data = fs.readFileSync(path, 'utf-8');
    const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

    let sum = 0;

    for(let match of data.matchAll(pattern)){
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);

        sum += x * y;
    }

    return sum ;
}

const path = './day3/input.txt';
const result = sumOfMul(path);
console.log(result);