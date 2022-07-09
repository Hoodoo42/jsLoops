let counter = 0;
while(counter < 51){
    console.log(counter);
    counter = counter + 1;
}

counter = 0;
while(counter > -51){
    console.log(counter);
    counter = counter -1;
}


counter = 0;
while(counter <101){
    console.log(counter);
    counter = counter + 2;
}


let playerNames = [`Spiderman`,`Ironman`,`Hulk`];
// playerCount varible gives us a point of access into the playerNames array
let playerCount= 0;
let playerPoints = [24, 17, 32];
// variable.length allows us to dynamically count any given number of values in an array
// so while playerCount is less than "the number of(length) values there are in array -- do this..."
while(playerCount < playerNames.length){

// backtck the entire console.log as one statement
// make sure every variable is spelled as the original
    console.log(`Player: ${playerNames[playerCount]} Score: ${playerPoints[playerCount]}`);
    playerCount ++;
}

