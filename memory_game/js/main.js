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
            reset();
            
        }

        else {

            alert("Sorry, try again.");
            reset();

        }
    }
}

function filpCard(){

    let cardId = this.getAttribute('data-id')

    cardsInPlay.push(cards[cardId].rank);
    console.log(cardsInPlay);
   
    this.setAttribute('src', cards[cardId].cardImage);
   
    
    checkForMatch();

}

function createBoard(){

    let gameTable = document.getElementById('game-board');

    for (let i = 0; i < cards.length; i++){

        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);

        cardElement.addEventListener('click', filpCard);
        gameTable.appendChild(cardElement);

    }

} 

function reset(){
    
    let images = document.getElementsByTagName('img');
    console.log(images);

    for (let i = 0; i < images.length; i++){

        images[i].setAttribute('src', "images/back.png");
        images[i].setAttribute('data-id', i);

    }

    cardsInPlay.splice(0);
    console.log(cardsInPlay);
    
}

createBoard();





