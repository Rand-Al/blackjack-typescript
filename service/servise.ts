import { Card } from "../src/types/cardDeck.types";

const cardDeck: Card[] = [
  { value: 2, suit: "heart", name: "2 of hearts" },
  { value: 3, suit: "heart", name: "3 of hearts" },
  { value: 4, suit: "heart", name: "4 of hearts" },
  { value: 5, suit: "heart", name: "5 of hearts" },
  { value: 6, suit: "heart", name: "6 of hearts" },
  { value: 7, suit: "heart", name: "7 of hearts" },
  { value: 8, suit: "heart", name: "8 of hearts" },
  { value: 9, suit: "heart", name: "9 of hearts" },
  { value: 10, suit: "heart", name: "10 of hearts" },
  { value: 10, suit: "heart", name: "jack of hearts" },
  { value: 10, suit: "heart", name: "queen of hearts" },
  { value: 10, suit: "heart", name: "king of hearts" },
  { value: [11, 1], suit: "heart", name: "ace of hearts" },

  { value: 2, suit: "diamonds", name: "2 of diamonds" },
  { value: 3, suit: "diamonds", name: "3 of diamonds" },
  { value: 4, suit: "diamonds", name: "4 of diamonds" },
  { value: 5, suit: "diamonds", name: "5 of diamonds" },
  { value: 6, suit: "diamonds", name: "6 of diamonds" },
  { value: 7, suit: "diamonds", name: "7 of diamonds" },
  { value: 8, suit: "diamonds", name: "8 of diamonds" },
  { value: 9, suit: "diamonds", name: "9 of diamonds" },
  { value: 10, suit: "diamonds", name: "10 of diamonds" },
  { value: 10, suit: "diamonds", name: "jack of diamonds" },
  { value: 10, suit: "diamonds", name: "queen of diamonds" },
  { value: 10, suit: "diamonds", name: "king of diamonds" },
  {
    value: [11, 1],
    suit: "diamonds",
    name: "ace of diamonds",
  },

  { value: 2, suit: "spades", name: "2 of spades" },
  { value: 3, suit: "spades", name: "3 of spades" },
  { value: 4, suit: "spades", name: "4 of spades" },
  { value: 5, suit: "spades", name: "5 of spades" },
  { value: 6, suit: "spades", name: "6 of spades" },
  { value: 7, suit: "spades", name: "7 of spades" },
  { value: 8, suit: "spades", name: "8 of spades" },
  { value: 9, suit: "spades", name: "9 of spades" },
  { value: 10, suit: "spades", name: "10 of spades" },
  { value: 10, suit: "spades", name: "jack of spades" },
  { value: 10, suit: "spades", name: "queen of spades" },
  { value: 10, suit: "spades", name: "king of spades" },
  { value: [11, 1], suit: "spades", name: "ace of spades" },

  { value: 2, suit: "clubs", name: "2 of clubs" },
  { value: 3, suit: "clubs", name: "3 of clubs" },
  { value: 4, suit: "clubs", name: "4 of clubs" },
  { value: 5, suit: "clubs", name: "5 of clubs" },
  { value: 6, suit: "clubs", name: "6 of clubs" },
  { value: 7, suit: "clubs", name: "7 of clubs" },
  { value: 8, suit: "clubs", name: "8 of clubs" },
  { value: 9, suit: "clubs", name: "9 of clubs" },
  { value: 10, suit: "clubs", name: "10 of clubs" },
  { value: 10, suit: "clubs", name: "jack of clubs" },
  { value: 10, suit: "clubs", name: "queen of clubs" },
  { value: 10, suit: "clubs", name: "king of clubs" },
  { value: [11, 1], suit: "clubs", name: "ace of clubs" },
];
const croupierHand: Card[] = [];
const playerHand: Card[] = [];
const shuffleArray = (arr: Card[]): Card[] => {
  let shuffledArr = [...arr];
  shuffledArr.sort(() => Math.random() - 0.5);
  return shuffledArr;
};
const data = {
  startGame: (): void => {
    const mixedArray: Card[] = shuffleArray(cardDeck);
    const firstUserCard: Card | undefined = mixedArray.shift();
    if (firstUserCard) {
      playerHand.push(firstUserCard);
    }
    const secondUserCard: Card | undefined = mixedArray.shift();
    if (secondUserCard) {
      playerHand.push(secondUserCard);
    }
    console.log(playerHand);
  },
};
export default data;
