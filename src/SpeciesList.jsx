import classNames from 'classnames';


export const SpeciesList = ({ props }) => {
  const { G, ctx } = props;
  const species = G.species;

  return (<>
    <div className='species row'>
      {species.map(s => {
        const player = Object.keys(G.data).find(k => G.data[k].species === s.name);

        const disabled = !!player;

        return (<div className={classNames('col', { disabled })}>
          {disabled && <span className='playerIndicator'>Player #{parseInt(player) + 1}</span>}
          <h2 className='name'>{s.name}</h2>
          <div>
            <div>Money/Science/Materials: {s.startingResources.money}/{s.startingResources.science}/{s.startingResources.materials}</div>
            <div>Trade: {s.tradeRatio}=&gt;1</div>
            <div>Interceptor: {s.shipCost.Interceptor}</div>
            <div>Cruiser: {s.shipCost.Cruiser}</div>
            <div>Dreadnought: {s.shipCost.Dreadnought}</div>
            <div>Starbase: {s.shipCost.Starbase}</div>
            <div>Moves: {s.actions.moves}</div>
            <div>Builds: {s.actions.builds}</div>
            <div>Upgrades: {s.actions.upgrades}</div>
          </div>
          <input disabled={disabled} type="image" alt="avatar" className="avatar" src={s.avatar} onClick={() => props.moves.pickBoard(s.name)} />
        </div>);
      }
      )}
    </div>
  </>);
};