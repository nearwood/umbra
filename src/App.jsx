import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';

import { Lobby } from 'boardgame.io/react';

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

const App = () => {
  if (process.env.REACT_APP_MULTIPLAYER_HOST) {
    return (
      <Lobby
        gameServer={`http://${window.location.hostname}:8080`}
        lobbyServer={`http://${window.location.hostname}:8080`}
        gameComponents={[
          { game: Umbra, board: GameBoard }
        ]}
      />
    );
  } else {
    return Client({
      game: Umbra,
      board: GameBoard,
      multiplayer: process.env.REACT_APP_MULTIPLAYER_HOST ? SocketIO({ server: process.env.REACT_APP_MULTIPLAYER_HOST }) : undefined
    });
  }
}


export default App;
