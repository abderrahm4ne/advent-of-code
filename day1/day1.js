import fs from 'fs';

function distance(path){


const data = fs.readFileSync(path, 'utf-8');

const lines = data.trim().split('\n');

const left = [];
const right = [];

lines.forEach(line => {
	const [l, r] = line.split(/\s+/).map(Number);
	left.push(l);
	right.push(r);
})

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

	let totalDistance = 0;

for (let i = 0; i < left.length; i++) {
	totalDistance += Math.abs(left[i] - right[i]);
}

return totalDistance;
}


const path = './day1/input.txt';

const pairs = distance(path);
console.log(pairs);