import { Lobby } from 'boardgame.io/react';

import { GameBoard } from './GameClient';
import { Umbra } from './Game';

const App = () => (
  <Lobby
    gameServer={`http://${window.location.hostname}:8443`}
    lobbyServer={`http://${window.location.hostname}:8443`}
    gameComponents={[
      { game: Umbra, board: GameBoard }
    ]}
  />
);

export default App;
