import { Lobby } from 'boardgame.io/react';

import { GameBoard } from './GameClient';
import { Umbra } from './Game';

const App = () => (
  <Lobby
    gameServer={`http://${window.location.hostname}:8080`}
    lobbyServer={`http://${window.location.hostname}:8080`}
    gameComponents={[
      { game: Umbra, board: GameBoard }
    ]}
  />
);

export default App;
