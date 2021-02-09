import { Client } from 'boardgame.io/react';
import { Umbra } from './Game';

const UmbraBoard = (props) => {
  const { G, ctx } = props;

  return (<>
    <div>Phase: {ctx.phase}</div>
    <div>Current Player: {ctx.currentPlayer}</div>
    <hr />
    <div id='board' className='col'>
      <div id='shipSection'>
        Ships go here.
      </div>
      <div id='rest' className='row'>
        <div id='rep'>
          Rep goes here.
        </div>
        <div className='right col'>
          <div id='techTree' className='col'>
            <div className='tech row'>
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
            </div>
            <div className='tech row'>
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
            </div>
            <div className='tech row'>
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
              <div className='techCell' />
            </div>
          </div>
          <div className='row'>
            <div id='production' className='col'>
              <div className='row' id='money'>
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
              </div>
              <div className='row' id='science'>
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
              </div>
              <div className='row' id='materials'>
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
                <div className='cubeCell' />
              </div>
            </div>
            <div id='buttons' className='row'>
              <button>EXP</button>
              <button>INF</button>
              <button>RES</button>
              <button>UPG</button>
              <button>REP</button>
              <button>MOV</button>
              <button onClick={() => props.moves.pass()}>PAS</button>
            </div>
          </div>
          <div id='actions' className='row'>
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
            <div className='actionCell' />
          </div>
        </div>
      </div>
    </div>
  </>);
};

const App = Client({
  game: Umbra,
  board: UmbraBoard,
});


export default App;
