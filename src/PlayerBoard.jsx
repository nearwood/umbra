import classNames from 'classnames';


const renderInfluenceCells = (G, ctx) => {
  let cells = [];
  const upkeepCostMap = {
    '1': 30,
    '2': 25,
    '3': 21,
    '4': 17,
    '5': 13,
    '6': 10,
    '7': 7,
    '8': 5,
    '9': 3,
    '10': 2,
    '11': 1,
    '12': 0,
    '13': 0,
  };
  for (let i = 1; i <= G.maxInfluence; ++i) {
    let f = G.data[ctx.currentPlayer].influence;
    cells.push(<div className={classNames('actionCell', { empty: i >= f })}>{upkeepCostMap[i]}</div>);
  }

  return cells;
}

export const PlayerBoard = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board col'>
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
            {renderInfluenceCells(G, ctx)}
          </div>
        </div>
      </div>
    </div>
  </>);
};