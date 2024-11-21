class Card {
    constructor(suit, num) {
        this.suit = suit;
        this.num = num;
    }

    toString() {
        return suit + "" + this.num;
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

//deck works
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

    rand1 = Math.floor(Math.random() * 51)
    rand2 = Math.floor(Math.random() * 50)

    hand.push(deck[rand1]);
    hand.splice(rand1, 1)

    hand.push(deck[rand2]);
    hand.splice(rand2, 1)
}
shuffleDeck()
dealHand()

document.write(hand)