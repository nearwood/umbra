import classNames from 'classnames';

export const PlayerColors = {
  "0": 'yellow',
  "1": 'red',
  "2": 'cyan',
  "3": 'green',
  "4": 'black',
  "5": 'white',
};

export const UpkeepMap = {
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
}

export const ProductionMap = {
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
  '12': 2, //instructions have misprint, there are 12 total
};

const renderInfluenceCells = (G, ctx) => {
  let cells = [];

  for (let i = 1; i <= G.data[ctx.currentPlayer].maxInfluence; ++i) {
    let f = G.data[ctx.currentPlayer].influence;
    cells.push(<div key={i} className={classNames('actionCell', { empty: i >= f }, PlayerColors[ctx.currentPlayer])}>{UpkeepMap[i]}</div>);
  }

  return cells;
}

const renderProductionCell = (player, type) => {
  let cells = [];

  for (let i = 1; i <= 12; ++i) {
    let f = player.production[type];
    cells.push(<div key={i} className={classNames('productionCell', { empty: f >= ProductionMap[i] })}>{ProductionMap[i]}</div>);
  }

  return cells;
}

export const PlayerBoard = ({ props }) => {
  const { G, ctx, playerId, isActive } = props;
  const id = playerId ? playerId : ctx.currentPlayer; //TODO Gonna need big refactor for this.
  const player = G.data[id];
  const species = G.species.find(s => s.name === player.species);

  const emptyMaterialsSpots = Array(7 - player.research.materials.length).fill(0).map((x, i) => <div key={i} className='techCell' />);
  const emptyScienceSpots = Array(7 - player.research.science.length).fill(0).map((x, i) => <div key={i} className='techCell' />);
  const emptyMoneySpots = Array(7 - player.research.money.length).fill(0).map((x, i) => <div key={i} className='techCell' />);

  return (<>
    <div className={classNames('board col', { disabled: !isActive })}>
      <div className='row'>
        <div id='shipSection' className='grow row'>
          <svg width={128} height={100} viewBox="-24 -24 72 100">
            <polygon points="12,0 24,-24 36,0 48,48 72,72 -24,72 0,48" className="shipRect" />
            <rect x={12} y={0} width={24} height={24} className="shipRect" />
            <rect x={12} y={24} width={24} height={24} className="shipRect" />
            <rect x={0} y={48} width={24} height={24} className="shipRect" />
            <rect x={24} y={48} width={24} height={24} className="shipRect" />
          </svg>
        </div>
        <div className='resources'>
          <div><span className='emoji'>💰</span> <span className='resources'>{player.money}</span>+<span className='production'>{player.production.money}</span></div>
          <div><span className='emoji'>🧬</span> <span className='resources'>{player.science}</span>+<span className='production'>{player.production.science}</span></div>
          <div><span className='emoji'>🛠️</span> <span className='resources'>{player.materials}</span>+<span className='production'>{player.production.materials}</span></div>
        </div>
      </div>
      <div id='rest' className='row'>
        <div id='rep'>
          Rep goes here.
        </div>
        <div className='right col'>
          <div className='row'>
            <div id='techTree' className='col grow'>
              <div className='tech row'>
                {player.research.materials.map(tile => (
                  <div key={tile.name} className={classNames('techCell center')}><div>{tile.name}</div><span className='emoji start'>🛠️</span></div>
                ))}
                {emptyMaterialsSpots}
              </div>
              <div className='tech row'>
                {player.research.money.map(tile => (
                  <div key={tile.name} className={classNames('techCell center')}><div>{tile.name}</div><span className='emoji start'>💰</span></div>
                ))}
                {emptyMoneySpots}
              </div>
              <div className='tech row'>
                {player.research.science.map(tile => (
                  <div key={tile.name} className={classNames('techCell center')}><div>{tile.name}</div><span className='emoji start'>🧬</span></div>
                ))}
                {emptyScienceSpots}
              </div>
            </div>
            <img alt="avatar" className='avatar' src={species.avatar} />
          </div>
          <div className='row'>
            <div id='production' className='col'>
              <div className='row' id='money'>
                {renderProductionCell(player, 'money')}
              </div>
              <div className='row' id='science'>
                {renderProductionCell(player, 'science')}
              </div>
              <div className='row' id='materials'>
                {renderProductionCell(player, 'materials')}
              </div>
            </div>
            <div id='buttons' className='row'>
              <button disabled={!isActive} onClick={() => props.moves.explore()}><div>EXP</div>{player.spentInfluence.explore}</button>
              <button disabled={!isActive}><div>INF</div>{player.spentInfluence.influence}</button>
              <button disabled={!isActive}><div>RES</div>{player.spentInfluence.research}</button>
              <button disabled={!isActive}><div>UPG</div>{player.spentInfluence.upgrade}</button>
              <button disabled={!isActive}><div>BLD</div>{player.spentInfluence.build}</button>
              <button disabled={!isActive}><div>MOV</div>{player.spentInfluence.move}</button>
              <button disabled={!isActive} onClick={() => props.moves.pass()}><div>PASS</div></button>
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