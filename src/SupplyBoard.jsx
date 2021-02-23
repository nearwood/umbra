import classNames from 'classnames';

import { TechCategory } from './TechTiles';

const RoundIndicators = ({ maxRounds, currentRound }) => {
  let indicators = [];
  for (let r = 1; r <= maxRounds; ++r) {
    indicators.push(<div key={r} className={classNames('cell indicator', { highlight: currentRound === r })}>{r}</div>);
  }
  return indicators;
}

const CostLabel = ({ cost, minCost }) => {
  if (cost !== minCost) {
    return <span className='cost'><span className='price'>{cost}</span>|<span className='min'>{minCost}</span></span>;
  } else {
    return <span className='cost'><span className='price'>{cost}</span></span>;
  }
}

const researchTech = (tech) => {
  console.log(tech.name);
};

export const SupplyBoard = ({ props }) => {
  const { G, ctx, isActive } = props;

  const player = G.data[ctx.currentPlayer];

  const militaryTech = Array.isArray(G.techTiles) ? G.techTiles.filter(t => t.category === TechCategory.Military) : [];
  const gridTech = Array.isArray(G.techTiles) ? G.techTiles.filter(t => t.category === TechCategory.Grid) : [];
  const nanoTech = Array.isArray(G.techTiles) ? G.techTiles.filter(t => t.category === TechCategory.Nano) : [];

  return (<>
    <div className={classNames('board row', { disabled: !isActive })}>
      <div className='col'>
        <div id='rounds' className='row'>
          <div>Round: <div className='row'><RoundIndicators maxRounds={G.maxRounds} currentRound={G.currentRound} /></div></div>
          <div>Phase: <span className={classNames('phase indicator', ctx.phase)}>{ctx.phase}</span></div>
          <div>Current Player: <span className={classNames('indicator', { highlight: isActive })}>{parseInt(ctx.currentPlayer) + 1}</span></div>
        </div>
        <div id='researchTree' className='col'>
          <div className='research row'>
            {militaryTech.map(tile => (
              <button onClick={() => researchTech(tile)} key={tile.name} disabled={tile.supply === 0 || player.science < tile.cost} className={classNames('researchCell center', { empty: tile.supply === 0 })}><div>{tile.name}</div> <div className='row'><span className='emoji'>🛠️</span><span className='grow' /><CostLabel cost={tile.cost} minCost={tile.minCost} /></div></button>
            ))}
          </div>
          <div className='research row'>
            {gridTech.map(tile => (
              <button onClick={() => researchTech(tile)} key={tile.name} disabled={tile.supply === 0 || player.science < tile.cost} className={classNames('researchCell center', { empty: tile.supply === 0 })}> <div>{tile.name}</div> <div className='row'><span className='emoji'>💰</span><span className='grow' /><CostLabel cost={tile.cost} minCost={tile.minCost} /></div></button>
            ))}
          </div>
          <div className='research row'>
            {nanoTech.map(tile => (
              <button onClick={() => researchTech(tile)} key={tile.name} disabled={tile.supply === 0 || player.science < tile.cost} className={classNames('researchCell center', { empty: tile.supply === 0 })}> <div>{tile.name}</div> <div className='row'><span className='emoji'>🧬</span><span className='grow' /><CostLabel cost={tile.cost} minCost={tile.minCost} /></div></button>
            ))}
          </div>
        </div>
        <div className='row shipParts'>
          <div className='col'>
            <div className='row'>
              <div className='partsCell'>{G.parts.find(p => p.name === 'Ion Cannon').name}</div>
              <div className='partsCell' />
            </div>
            <div className='row'>
              <div className='partsCell' />
              <div className='partsCell' />
            </div>
            <div className='row'>
              <div className='partsCell' />
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <div className='partsCell' />
              <div className='partsCell' />
              <div className='partsCell' />
              <div className='partsCell' />
            </div>
            <div className='row'>
              <div className='partsCell' />
              <div className='partsCell' />
              <div className='partsCell' />
              <div className='partsCell' />
            </div>
            <div className='row'>
              <div className='partsCell' />
              <div className='partsCell' />
              <div className='partsCell' />
              <div className='partsCell' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};