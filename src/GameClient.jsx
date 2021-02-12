import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';

import { Umbra } from './Game';
import { PlayerBoard } from './PlayerBoard';
import { SupplyBoard } from './SupplyBoard';
import { HexMap } from './HexMap';

export const GameBoard = (props) => (
  <div>
    <HexMap props={props} />
    <hr />
    <SupplyBoard props={props} />
    <hr />
    <PlayerBoard props={props} />
  </div>
);

const GameClient = Client({
  numPlayers: 2,
  game: Umbra,
  board: GameBoard,
  multiplayer: process.env.REACT_APP_MULTIPLAYER_HOST ? SocketIO({ server: process.env.REACT_APP_MULTIPLAYER_HOST }) : undefined
});

export default GameClient;
