import { Client } from 'boardgame.io/react';
import { Umbra } from './Game';

const UmbraBoard = (props) => {
  const { G, ctx } = props;

  return (<>
    <div>Phase: {ctx.phase}</div>
    <div>Current Player: {ctx.currentPlayer}</div>
  </>);
};

const App = Client({
  game: Umbra,
  board: UmbraBoard,
});


export default App;
