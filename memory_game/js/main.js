console.log('mainJS is connected.');

const cards = ['Queen', 'Queen', 'King', 'King'];
let cardsInPlay = [];

function checkForMatch(){
    if (cardsInPlay.length === 2) {

        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        }

    else {
        alert("Sorry, try again.");
        }
    }
}

function filpCard(cardId){

    console.log(`User flipped over ${cards[cardId]}`);

    cardsInPlay.push(cards[cardId]);
    
    checkForMatch();

    
}

filpCard(0);
filpCard(2);




