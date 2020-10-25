let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* Give computer CHOICES (r, p, s) and RANDOM the choices and outputs to GET_COMPUTER_CHOICE */
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randNum = Math.floor(Math.random() * 3); //math.random is always between 0 - 1 and never reaches either. With * 3 we are between 0 - 3 but still never reaches either
    return choices[randNum];
};

/* Converts r, p, s into full-length strings for human readability - is used in either win, lose or draw function*/
function convertChoice(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

/* used in GAME_FUNCTION */
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertChoice(userChoice)} beats ${convertChoice(computerChoice)}. You win!`;
};

/* used in GAME_FUNCTION */
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertChoice(computerChoice)} beats ${convertChoice(userChoice)}. You lose!`;
};

/* used in GAME_FUNCTION */
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `Both had ${convertChoice(userChoice)}. It's a draw`;
};

/* Takes USER_INPUT to USER_CHOICE and  
    compares to COMPUTER_CHOICE from GET_COMPUTER_CHOICE_FUNCTION
    switch statement to choose who wins
*/
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
};

/* Takes USER_INPUT from either rock, paper, scissors and outputs "r", "p" or "s" into GAME_FUNCTION  */
function main() {
    rock_div.addEventListener("click", function(){
        game("r");
    });
    
    paper_div.addEventListener("click", function(){
        game("p");
    });
    
    scissors_div.addEventListener("click", function(){
        game("s");
    });
};

main();