import classNames from 'classnames';

export const PlayerColors = {
  "0": 'yellow',
  "1": 'red',
  "2": 'cyan',
  "3": 'green',
  "4": 'black',
  "5": 'white',
};

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
    cells.push(<div key={i} className={classNames('actionCell', { empty: i >= f }, PlayerColors[ctx.currentPlayer])}>{upkeepCostMap[i]}</div>);
  }

  return cells;
}

const renderProductionCell = (G, ctx, type) => {
  let cells = [];
  const productionMap = {
    '1': 28,
    '2': 24,
    '3': 21,
    '4': 18,
    '5': 15,
    '6': 12,
    '7': 10,
    '8': 8,
    '9': 6,
    '10': 4,
    '11': 3,
    '12': 2,
  };
  for (let i = 1; i <= 12; ++i) {
    let f = G.data[ctx.currentPlayer].production[type];
    cells.push(<div key={i} className={classNames('productionCell', { empty: 12 - f >= i })}>{productionMap[i]}</div>);
  }

  return cells;
}

export const PlayerBoard = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board col'>
      <div id='shipSection'>
        <svg width={128} height={100} viewBox="-24 -24 72 100">
          <polygon points="12,0 24,-24 36,0 48,48 72,72 -24,72 0,48" className="shipRect" />
          <rect x={12} y={0} width={24} height={24} className="shipRect" />
          <rect x={12} y={24} width={24} height={24} className="shipRect" />
          <rect x={0} y={48} width={24} height={24} className="shipRect" />
          <rect x={24} y={48} width={24} height={24} className="shipRect" />
        </svg>
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
                {renderProductionCell(G, ctx, 'money')}
              </div>
              <div className='row' id='science'>
                {renderProductionCell(G, ctx, 'science')}

              </div>
              <div className='row' id='materials'>
                {renderProductionCell(G, ctx, 'materials')}

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