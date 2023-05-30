import React from "react";
import s from "../assets/css/Rules.module.css";

const Rules = () => {
  return (
    <div className={`${s.rules} flex items-center justify-center flex-col`}>
      <h1 className={`${s.title} text-6xl mt-4 text-center text-white`}>
        Rules
      </h1>
      <div className={s.wrapper}>
        <h2>Aim</h2>
        <p>
          The aim of blackjack is to finish the game with a higher total than
          that of the dealer, without exceeding 21. Going over 21 is commonly
          known as ‘busting’ and means an automatic loss.
        </p>

        <h2>The Play - Basic Rules</h2>

        <p>
          Blackjack is usually played at a table of 2-7 players and uses one to
          eight 52-card decks. All number cards (2-10) score the value indicated
          on them. The face cards (Jack, Queen, King) score 10 points and Ace
          can either be treated as 1 or 11.
        </p>
        <p>
          At the beginning of each round, all players place their bets in their
          betting positions - also known as ‘boxes’. After the bets have been
          placed, all players are dealt two cards face-up in front of their
          respective betting positions. The dealer receives two cards, one
          face-up and another face-down.
        </p>

        <p>
          Starting to the left of the dealer, each player is given a chance to
          draw more cards. The players can either ‘hit’ or ‘stand’. If the
          player calls out ‘HIT’, they are given an extra card. They can then
          either call out ‘HIT’ again, or ‘STAND’ if they do not wish to draw
          any more cards. The player can ‘HIT’ as many times as they wish, but
          have to aim not to ‘bust’ (exceed a total of 21).
        </p>

        <p>If the player busts, they immediately lose their bet.</p>

        <p>
          After each player has played and either stood or busted, the dealer
          takes their turn. They can, again, either ‘HIT’ or ‘STAND’. If the
          dealer’s hand exceeds 21, all players who didn't bust win immediately
          - their bet is returned along with a matching amount from the dealer's
          bank.
        </p>

        <p>
          If the dealer reaches a valid hand, the cards are totalled and each
          player’s hand is compared to the dealer’s. If the player scored higher
          than the dealer, they win. If the player ties with the dealer, the
          original bet is returned to the player. Otherwise, the player loses
          their bet.
        </p>

        <p>
          A perfect hand combines an ace with a 10, Jack, Queen or King and is
          known as a ‘Blackjack’.
        </p>

        <p>Other Options that may be available during the hand</p>

        <p>
          In addition to the basic rules, most casinos offer a few other options
          which are available to players in certain situations. It is always
          wise to consult the house rules to see the details of any allowed
          options.
        </p>

        <h2>Split</h2>
        <p>
          If the first two cards are a pair, the players are allowed to split
          those, thus creating two hands rather than the normal one per seat. To
          fund the split, the player has to place a second bet, of equal value
          to the first.
        </p>

        <h2>Double Down</h2>
        <p>
          After receiving the first two cards, players can double their bet
          while hitting. When doubling down, player receives one extra card only
          and cannot hit again. Most casinos allow cards to be split again if
          the second card makes another pair - but some have limits on the
          number of times a player can split.
        </p>

        <h2>Insurance</h2>

        <p>
          Insurance is a side bet, which is offered to the players when the
          dealer’s up card is an ace. It insures the player against the dealer
          having a ‘blackjack’ and gives them a chance to break even on the
          hand, if the dealer’s cards total 21. Insurance is offered before the
          dealer checks their face-down card.
        </p>

        <h2>Surrender</h2>

        <p>
          If a player believes they will be unable to beat dealer’s hand, they
          can choose to ‘surrender’. In this strategy, players fold the hand,
          and risk loosing only half of the bet, rather than the whole amount. A
          player can only forfeit their hand before receiving extra cards.
        </p>

        <h2>Bet Behind</h2>

        <p>
          Busy, live casinos sometimes offer an option to take side bets,
          otherwise known as ‘bet behind’. This is where a limitless number of
          people take a bet behind the main seven seated players, wagering that
          they will win the hand.
        </p>
      </div>
    </div>
  );
};

export default Rules;
