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
        this.suits = ["H", "D", "C", "S"];
        this.num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
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

    const handDiv = document.getElementById('hand');
    handDiv.textContent = `${hand.join(', ')}`;
}

function loadHand() {

}



window.onload = dealHand;