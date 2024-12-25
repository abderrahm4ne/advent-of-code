import fs from 'fs';

function similarityCalc(){
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    let sum = 0;
    const left = [];
    const right = [];

    lines.forEach(line => {
        const [l, r] = line.split(/\s+/).map(Number);
        left.push(l);
        right.push(r);
    });

    
    for(let element of left){
        const occ = right.filter(elem => elem === element).length;
        sum += element * occ;
    }
    
    return sum;
}

const path = './day1/input.txt'
const result = similarityCalc(path);
console.log(result);