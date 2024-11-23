class Card {
    constructor(suit, num) {
        this.suit = suit;
        this.num = num;
    }

    toString() {
        return `${this.num}${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.suits = ["h", "d", "c", "s"];
        this.num = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    }

    createDeck() {
        let deck = [];
        for (let num of this.num) {
            for (let suit of this.suits) {
                deck.push(num + "" + suit);
            }
        }
        return deck;
    }
}

//deck workds
const a = new Deck();
const deck = a.createDeck();

const hand = []

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealHand() {
    shuffleDeck();

    for (let i = 0; i < 2; i++) {
        hand.push(deck.pop());
    }

    const img1 = hand[0] + "";
    const img2 = hand[1] + "";
    
    console.log("workingawdawd")
    loadImg(img1);
    loadImg(img2);
    console.log("working iijdsfkoj")
    const handDiv = document.getElementById('hand');
    // handDiv.textContent = `${hand.join(', ')}`;
}

function loadImg(i) {
    const img = i;
    const num = img.substr(0, 1);
    const suit = img.substr(1, 2);
    const address = "/images/deck/" + num + "-" + suit + ".svg";
    
    const card = document.createElement('img');
    card.src = address;
    const handDiv = document.getElementById('hand');
    handDiv.appendChild(card);
}

function dealTable(){
    const tableDiv = document.getElementById('table');
    for (let i = 0; i < 5; i++) {
        const cardStr = deck.pop(); 
        const num = cardStr.substr(0, 1);
        const suit = cardStr.substr(1, 2);
        const address = "/images/deck/" + num + "-" + suit + ".svg";
        const card = document.createElement('img');
        card.src = address;
        tableDiv.appendChild(card);
    }
}


window.onload = function(){
    dealHand();
    dealTable();
}