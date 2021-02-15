import { Lobby } from 'boardgame.io/react';

import { GameBoard } from './GameClient';
import { Umbra } from './Game';

const App = () => (
  <Lobby
    gameServer={`${process.env.REACT_APP_MULTIPLAYER_HOST}`}
    lobbyServer={`${process.env.REACT_APP_MULTIPLAYER_HOST}`}
    gameComponents={[
      { game: Umbra, board: GameBoard }
    ]}
  />
);

export default App;
