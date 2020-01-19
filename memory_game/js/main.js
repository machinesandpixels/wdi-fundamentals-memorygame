console.log('mainJS is connected.');

const cards = [
    {
        rank: "queen",
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },

    {   
        rank: "queen",
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },

    {
        rank: "king",
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },

    {   
        rank: "king",
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }
    
];

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

    console.log(`User flipped over ${cards[cardId].rank}`);

    cardsInPlay.push(cards[cardId].rank);
    
    checkForMatch();

    
}

filpCard(0);
filpCard(2);




