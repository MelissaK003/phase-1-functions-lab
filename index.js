// Code your solution in this file!

function distanceFromHqInBlocks(block)
{return Math.abs(block - 42)}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(feet)
{return Math.abs(feet- 42) * 264}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(feet1,feet2)
{return Math.abs(feet2-feet1)*264}

console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
console.log(distanceTravelledInFeet(34,28));


function calculatesFarePrice(feet1, feet2) {
let distance = Math.abs(feet2 - feet1) * 264; 

if (distance <= 400) 
{return 0;}
else if (distance > 400 && distance <= 2000) 
{return (distance - 400) * 0.02;} 
else if(distance >2000 && distance <=2500)
{return 25}
else
{return 'cannot travel that far'}
}
console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34,24));




