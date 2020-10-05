const rockButton = document.querySelector('.rock').addEventListener('click', () => {
    document.querySelector('h2').innerText = rps()
});

const paperButton = document.querySelector('.paper').addEventListener('click', () => {
    document.querySelector('h2').innerText = rps();
});

const scissorsButton = document.querySelector('.scissors').addEventListener('click', () => {
    document.querySelector('h2').innerText = rps();
});

let user = prompt('Rock, Paper or Scissors?');

// Computer choice!
let calc = Math.random();

if (calc < 0.34) {
    calc = "rock";
} else if (calc <= 0.67) {
    calc = "paper";
} else {
    calc = "scissors";
}


function rps(user, calc) {
    if (user === calc) {
        return 'draw';
    }

    if (user === 'rock') {
        if (calc === 'scissors') {
            return 'User wins!';
        } else {
            return 'User lose!';
        }
    }

    if (user === 'paper') {
        if (calc === 'rock') {
            return 'User wins!';
        } else {
            return 'User lose!';
        }
    }

    if (user === 'scissors') {
        if (calc === 'paper') {
            return 'User wins!';
        } else {
            return 'User lose!';
        }
    }
}
let result = rps(user, calc);


