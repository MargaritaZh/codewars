// Define a card suit

// В качестве аргумента вы получаете любую карту. Ваша задача - вернуть масть этой карты (в нижнем регистре).
//
// Наша колода (предварительно загружена):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

function defineSuit(card) {
    if(card[card.length-1]==="♣") return 'clubs'
    if(card[card.length-1]==="♦") return 'diamonds'
    if(card[card.length-1]==="♥") return 'hearts'
    if(card[card.length-1]==="♠") return 'spades'
}
