import { Client } from 'boardgame.io/react';
import { Umbra } from './Game';
import { PlayerBoard } from './PlayerBoard';
import { SupplyBoard } from './SupplyBoard';
import { HexMap } from './HexMap';

const GameBoard = (props) => (
  <div>
    <HexMap props={props} />
    <hr />
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
