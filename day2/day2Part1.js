import fs from 'fs';

function numberOfSafeReports(path) {
    let safeRep = 0;
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    lines.forEach(line => {
        const report = line.split(' ').map(Number);

        let isAscending = true;
        let isDescending = true;
        let order = true;
        for (let i = 0; i < report.length - 1; i++) {
            let diff = report[i] - report[i + 1];
            if(diff > 0){
                isDescending = false;
            }
            if(diff < 0){
                isAscending = false;
            }
            if(Math.abs(diff) > 3 || diff === 0){
                order = false;
                break;
            }

    }
    if(order && (isAscending || isDescending)){
        safeRep++;
    }
});

    return safeRep;
}

let path = './day2/input.txt';
let result = numberOfSafeReports(path);
console.log("here is the number of safe lits " + result);