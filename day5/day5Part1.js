import fs from 'fs';

function sul(path){
    const data = fs.readFileSync(path, 'utf-8');
    const sections = data.trim().split("\n\n");

        const afData = {
            rules : sections[0].split("\n").map(rule => {
                const [before, after] = rule.split('|').map(Number);
                return{ x, y};
            }),
            updates : sections[1].split("\n").map(
                update => update.split(",").map(Number)
            )
        }


    return 
}


const path = './day5/input.txt';
const result = sul(path);
console.log(result);