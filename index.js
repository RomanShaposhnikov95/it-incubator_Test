const textValue = document.querySelector('.textValue');
const btn = document.querySelector('.active');


const findMax = (arr) => {
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
        if (max < arr[i]) max = arr[i]; 
    }
    return max;
}
 
const getMinValue = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
};

const arr = [1, 5, 7, 2, 9, 3, 10, 6, 8, 4];
const min = getMinValue(arr);
alert(`минимальное число ${min}`);

// ---------------------------------------------------------->

btn.addEventListener('click' , () => {
    if(textValue.value.toLowerCase() === 'google') {
        alert('Yandex круче. Но это не точно');
    } else {
        const max = findMax(arr);
        alert(textValue.value);
        alert(arrObjects[0].name)
        setTimeout(() => alert(`максимальное число ${max}`), 3000);
    }
})

// ---------------------------------------------------------->

let arrObjects = [];

arrObjects[0] = {
    name: "firstArrElement",
    age: "25"
}
arrObjects[1] = {
    name: "secondArrElement",
    age: "27"
}
arrObjects[2] = {
    name: "thirdArrElement",
    age: "30"
}

// ---------------------------------------------------------->

const superSum = (num1,num2) => {
    alert(num1 + num2)
}

superSum(22, 23)

// ---------------------------------------------------------->


let a = "XXX";
let b = "YYY";

[a, b] = [b, a];

console.log(a);
console.log(b);

