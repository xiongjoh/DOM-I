
const tenSeconds = document.querySelector('#secondTens')
const seconds = document.querySelector('#secondOnes')
const hundredsMs = document.querySelector('#msHundreds')
const tensMs = document.querySelector('#msTens')
const digits = document.querySelector('.digits')

setInterval(() => {
    if (isNaN(tensMs.textContent)) {
        tensMs.textContent = 1;
    }
    else if (Number(tensMs.textContent) > 8) {
        tensMs.textContent = 0;
    }
    else {
        tensMs.textContent = Number(tensMs.textContent) + 1
    }

}, 10)
setInterval(() => {
    if (isNaN(hundredsMs.textContent)) {
        hundredsMs.textContent = 1;
    }
    else if (Number(hundredsMs.textContent) > 8) {
        hundredsMs.textContent = 0;
    }
    else {
        hundredsMs.textContent = Number(hundredsMs.textContent) + 1
    }

}, 100)
setInterval(() => {
    if (isNaN(seconds.textContent)) {
        seconds.textContent = 1;
    }
    else if (Number(seconds.textContent) > 8) {
        seconds.textContent = 0;
    }
    else {
        seconds.textContent = Number(seconds.textContent) + 1
    }

    if (seconds.textContent == 0) {
        digits.classList.toggle('redDigit')
    }
    else {
        digits.classList.remove('redDigit')
    }

}, 1000)
setInterval(() => {
    if (isNaN(tenSeconds.textContent)) {
        tenSeconds.textContent = 1;
    }
    else if (Number(tenSeconds.textContent) > 4) {
        tenSeconds.textContent = 0;
    }
    else {
        tenSeconds.textContent = Number(tenSeconds.textContent) + 1
    }

}, 10000)

