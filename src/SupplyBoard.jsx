import classNames from 'classnames';

import { TechCategory } from './TechTiles';

const RoundIndicators = ({ maxRounds, currentRound }) => {
  let indicators = [];
  for (let r = 1; r <= maxRounds; ++r) {

    indicators.push(<div key={r} className={classNames('cell', { highlight: currentRound === r })}>{r}</div>);
  }
  return indicators;
}

export const SupplyBoard = ({ props }) => {
  const { G, ctx } = props;

  const militaryTech = Array.isArray(G.techTiles) ? G.techTiles.filter(t => t.category === TechCategory.Military) : [];
  const gridTech = Array.isArray(G.techTiles) ? G.techTiles.filter(t => t.category === TechCategory.Grid) : [];
  const nanoTech = Array.isArray(G.techTiles) ? G.techTiles.filter(t => t.category === TechCategory.Nano) : [];

  return (<>
    <div className='board row'>
      <div className='col'>
        <div id='rounds' className='row'>
          <div>Round:</div>
          <RoundIndicators maxRounds={G.maxRounds} currentRound={G.currentRound} />
        </div>
        <div id='researchTree' className='col'>
          <div className='research row'>
            {militaryTech.map(tile => (
              <div key={tile.name} className={classNames('researchCell', { empty: tile.supply === 0 })}><div>{tile.name}</div> <div><span className='emoji'>🛠️</span><span className='cost'>{tile.cost}/{tile.minCost}</span></div></div>
            ))}
          </div>
          <div className='research row'>
            {gridTech.map(tile => (
              <div key={tile.name} className={classNames('researchCell', { empty: tile.supply === 0 })}> <div>{tile.name}</div> <div><span className='emoji'>💰</span><span className='cost'>{tile.cost}/{tile.minCost}</span></div></div>
            ))}
          </div>
          <div className='research row'>
            {nanoTech.map(tile => (
              <div key={tile.name} className={classNames('researchCell', { empty: tile.supply === 0 })}> <div>{tile.name}</div> <div><span className='emoji'>🧬</span><span className='cost'>{tile.cost}/{tile.minCost}</span></div></div>
            ))}
          </div>
        </div>
        <div className='row shipParts'>
          <div className='col'>
            <div className='row'>
              <div className='partsCell' />
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
      <div className='col' id='spareParts'>
        Spare parts
        <div>Phase: {ctx.phase}</div>
        <div>Current Player: {parseInt(ctx.currentPlayer) + 1}</div>
      </div>
    </div>
  </>);
};