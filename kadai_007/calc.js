function getRandomInt(max) {
    return Math.floor(Math.random() * max) +1;
}

let num = getRandomInt(1000);

if (num % 3 === 0) {
    console.log('3の倍数です');
}

else if (num % 5 === 0) {
    console.log('5の倍数です');
}

else if ( num % 3 === 0 || num % 5 === 0) {
    console.log('３と５の倍数です')
}

else {
    console.log(num)
}