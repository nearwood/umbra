import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import './App.css';
import { Umbra } from './Game';
import { PlayerBoard } from './PlayerBoard';
import { SupplyBoard } from './SupplyBoard';
import { HexMap } from './HexMap';
import { SpeciesList } from './SpeciesList';

export const GameBoard = (props) => (
  props.ctx.phase === 'pick' ? <SpeciesList props={props} /> :
    <div>
      <HexMap props={props} />
      <hr />
      <div className="row">
        <SupplyBoard props={props} />
        <PlayerBoard props={props} />
      </div>
    </div>
);

const GameClient = Client({
  numPlayers: 2,
  game: Umbra,
  board: GameBoard,
  multiplayer: process.env.REACT_APP_MULTIPLAYER_HOST ? SocketIO({ server: process.env.REACT_APP_MULTIPLAYER_HOST }) : undefined
});

export default GameClient;
