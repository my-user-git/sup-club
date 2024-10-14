const heading = document.querySelector("h1");
const romanToNumeral = document.querySelector("input[type='checkbox']");
const conversionInput = document.querySelector("input[type='text']");
const outputArea = document.querySelector(".output");
const convertButton = document.querySelector(".btn");
const explanationArea = document.querySelector(".explanation");

//Converts roman numeral to integer
const convertRomanToInteger = () => {
    //Regex to validate roman numberal
    const romanNumeralRegex = new RegExp(
        /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
    );

    let explanation = {};
    let arrExplanation = [];

    let { value: roman } = conversionInput;
    roman = roman.toUpperCase();
    const regexResult = romanNumeralRegex.test(roman);

    if (!regexResult) {
        alert("Please enter a valid roman numeral");
        return false;
    }


    //sequence of roman letters
    let arr = ["I", "V", "X", "L", "C", "D", "M"];

    //value of the respective roman letters
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;

    //keep track of the previous index
    let prevIndex = 0;
    console.log(roman)

    for (let i = roman.length - 1; i >= 0; i--) {
        //if the current letter is having greater index than previous letter then add values
        if (arr.indexOf(roman[i]) >= prevIndex) {
            sum = sum + values[roman[i]];
        } else {
            //if the current letter is having lesser index than previous letter then sub values
            sum = sum - values[roman[i]];
        }

        //store the index of the previous roman letters
        prevIndex = arr.indexOf(roman[i]);
        explanation[Object.values(roman)[i]] = values[Object.values(roman)[i]];
        arrExplanation.push(explanation);
        explanation = {};
    }

    console.table(arrExplanation);

    //Add the result to the output area
    outputArea.innerHTML = sum;

    function out(arrExplanation) {
        for (const item of arrExplanation) {
            const li = document.createElement('li');
            li.textContent = Object.keys(item) + '=' + Object.values(item);
            explanationArea.append(li);
        }
    }

    out(arrExplanation);
};


//Calculate on convert button click
convertButton.addEventListener("click", () => {
    outputArea.innerHTML = '';
    explanationArea.innerHTML = '';
    convertRomanToInteger();
});

//Calculate when enter is pressed.
window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        explanationArea.innerHTML = '';
        convertRomanToInteger();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.roman-btn').addEventListener('click', function () {
        document.querySelector('.roman-content').classList.add('roman-content__open');
        document.querySelector('.roman-content__modal').classList.add('animate__animated', 'animate__bounce');
        form.reset();
        explanationArea.innerHTML = '';
        outputArea.innerHTML = '';
    })

    document.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.roman-btn') && !target.closest('.roman-content__modal')) {
            document.querySelector('.roman-content').classList.remove('roman-content__open')
        }
    })
})