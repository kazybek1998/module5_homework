// Задание 1

let answer = prompt("");

let check = Boolean(Number(answer));


if (check) {
    if (Number(answer) > 0) {
        alert("Четное");
    } else if (Number(answer) < 0) {
        alert("Нечетное");
    }
} else  {
    alert("Упс, кажется, вы ошиблись");
}

// Задание 2
let x = prompt();
let check1 = Boolean(Number(x));

if (Boolean(Number(x))) {
    alert("x is a number");
} else if ((typeof x)=="string") {
    alert("x is a string");
} else {
    alert("undefined");
}

// Задание 3
let str = prompt();

alert(str.split("").reverse().join(""));

// Задание 4
let number = Math.random(1, 100);
alert(number);

// Задание 5
let got = [1, 2, 3, 4, 5, 6, 7, 8];

let count = 0;
let sum = 0;
for (let i = 0; i < got.length; i++) {
    count += 1;
    sum += i;
    console.log(got[i]);
}
console.log(`count = ${count}, sum = ${sum}`);

// задание 6
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer1 = false;
let count1 = 0;
for (let i = 0; i < arr.length+1; i++) {
    if ((typeof arr[i])==(typeof arr[i+1])) {
        count1++;
    }
}

if (count1 == arr.length) {
    answer1 = true;
}

console.log(count1);
console.log(arr.length);

//задание 7
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "q"];

let countEven = 0;
let countOdd = 0;
let countZero = 0;
let countOther = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
        if (arr1[i] % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
    } else if (arr1[i] == 0) {
        countZero++;
    } else {
        if (Boolean(Number(arr1[i]))) {
            countOther++;
        }
    }
}
console.log(`countEven = ${countEven}, countOdd = ${countOdd}, countZero = ${countZero}, countOther = ${countOther}`);

let GOT = new Map();
GOT.set("Баратеоны", "Нам — ярость");
GOT.set("Ланнистеры", "Услышь мой рёв!");
GOT.set("Старки", "Зима близко");
GOT.set("Талли", "Семья, долг, честь");
GOT.set("Аррены", "Высокий как честь");
GOT.set("Грейджои", "Мы не сеем");
GOT.set("Тиреллы", "Вырастая — крепнем");
GOT.set("Мартеллы", "Непреклонные, несгибаемые, несдающиеся");

for (let got of GOT.keys()) {
    console.log(`Дом -> ${got} - Девиз дома -> ${GOT[got]}`);
}
