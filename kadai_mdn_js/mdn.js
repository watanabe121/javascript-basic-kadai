const date = new Date("2024-07-27");
const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
];
console.log(year + '年' + (month+1)  + '月' + day + '日');