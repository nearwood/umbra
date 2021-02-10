import { Client } from 'boardgame.io/react';
import { Umbra } from './Game';
import { PlayerBoard } from './PlayerBoard';
import { SupplyBoard } from './SupplyBoard';

const GameBoard = (props) => (
  <div>
    <SupplyBoard props={props} />
    <hr />
    <PlayerBoard props={props} />
  </div>
);

const App = Client({
  game: Umbra,
  board: GameBoard,
});


export default App;
