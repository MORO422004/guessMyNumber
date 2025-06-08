'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let secretNumber = number;



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ 7ot number!';
    }


    else if (guess > 20 || guess < 1) {
        document.querySelector('.message').textContent = 'I said between 1 and 20 ya mot5alf!';
        document.querySelector('body').style.backgroundColor = 'red';
    }

    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.message').textContent = '🎉 bravo 3lek';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent
                = guess > secretNumber ? '📉 Too high!' : '📈 Too low!';
            score--;
            document.querySelector('.score').textContent
                = score;
        } else {
            document.querySelector('.message').textContent
                = '💥 abl3 ya nerm';
            document.querySelector('.score').textContent
                = 0;
        }
    }
}
);

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
}
);

