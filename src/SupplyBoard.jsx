import classNames from 'classnames';
import { researchEnabled } from './moves/Research';

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

const getShipPart = (G, i) => G.parts[i] ? G.parts[i] : { name: "404 part not found" };

const ShipPart = (part) => {
  const stats = [];

  if (part.damage) {
    if (part.damage >= 0) {
      stats.push(<span key="damage" className='emoji damage'>🚀 {part.damage}</span>);
    } else {
      stats.push(<span key="damage" className='emoji damage'>🛡️ {-part.damage}</span>);
    }
  }

  if (part.targeting) {
    if (part.targeting >= 0) {
      stats.push(<span key="targeting" className='emoji targeting'>🎯 {part.targeting}</span>);
    } else {
      stats.push(<span key="targeting" className='emoji targeting'>🥴 {-part.targeting}</span>);
    }
  }

  if (part.energy) {
    if (part.energy >= 0) {
      stats.push(<span key="energy" className='emoji energy'>🔋 {part.energy}</span>);
    } else {
      stats.push(<span key="energy" className='emoji energy'>⚡ {-part.energy}</span>);
    }
  }

  if (part.initiative) {
    stats.push(<span key="initiative" className='emoji initiative'>⏫ {part.initiative}</span>);
  }

  return <div className="partsCell"><div>{part.name}</div> {stats}</div>;
}

export const SupplyBoard = ({ props }) => {
  const { G, ctx, isActive, moves } = props;

  // const player = G.data[ctx.currentPlayer];

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
        <div id='researchTree' className={classNames('col', { blink: G.researchEnabled })}>
          <div className='research row'>
            {militaryTech.map(tile => (
              <button onClick={() => moves.research(tile.name)} key={tile.name} disabled={!researchEnabled(G, ctx, tile)} className={classNames('researchCell center', { empty: tile.supply === 0 })}><div>{tile.name} x{tile.supply}</div> <div className='row'><span className='emoji'>🛠️</span><span className='grow' /><CostLabel cost={tile.cost} minCost={tile.minCost} /></div></button>
            ))}
          </div>
          <div className='research row'>
            {gridTech.map(tile => (
              <button onClick={() => moves.research(tile.name)} key={tile.name} disabled={!researchEnabled(G, ctx, tile)} className={classNames('researchCell center', { empty: tile.supply === 0 })}> <div>{tile.name} x{tile.supply}</div> <div className='row'><span className='emoji'>💰</span><span className='grow' /><CostLabel cost={tile.cost} minCost={tile.minCost} /></div></button>
            ))}
          </div>
          <div className='research row'>
            {nanoTech.map(tile => (
              <button onClick={() => moves.research(tile.name)} key={tile.name} disabled={!researchEnabled(G, ctx, tile)} className={classNames('researchCell center', { empty: tile.supply === 0 })}> <div>{tile.name} x{tile.supply}</div> <div className='row'><span className='emoji'>🧬</span><span className='grow' /><CostLabel cost={tile.cost} minCost={tile.minCost} /></div></button>
            ))}
          </div>
        </div>
        <div className='row shipParts'>
          <div className='col'>
            <div className='row'>
              {ShipPart(getShipPart(G, 0))}
              {ShipPart(getShipPart(G, 1))}
            </div>
            <div className='row'>
              {ShipPart(getShipPart(G, 2))}
              {ShipPart(getShipPart(G, 3))}
            </div>
            <div className='row'>
              {ShipPart(getShipPart(G, 4))}
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              {ShipPart(getShipPart(G, 5))}
              {ShipPart(getShipPart(G, 6))}
              {ShipPart(getShipPart(G, 7))}
              {ShipPart(getShipPart(G, 8))}
            </div>
            <div className='row'>
              {ShipPart(getShipPart(G, 9))}
              {ShipPart(getShipPart(G, 10))}
              {ShipPart(getShipPart(G, 11))}
              {ShipPart(getShipPart(G, 12))}
            </div>
            <div className='row'>
              {ShipPart(getShipPart(G, 13))}
              {ShipPart(getShipPart(G, 14))}
              {ShipPart(getShipPart(G, 15))}
              {ShipPart(getShipPart(G, 16))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};