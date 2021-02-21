import classNames from 'classnames';


export const SpeciesList = ({ props }) => {
  const { G, ctx } = props;
  // const player = G.data[ctx.currentPlayer];
  const species = G.species;

  const toggleSelected = (name) => {
    // if (player.species !== name) {
    props.moves.pickBoard(name);
    // } else {
    //   props.moves.pickBoard();
    // }
  };

  return (<>
    <div className='species row wrap'>
      {species.map(s => {
        const selectedPlayer = Object.keys(G.data).find(k => G.data[k].species === s.name);
        const disabled = !!selectedPlayer;// && selectedPlayer !== ctx.currentPlayer;

        return (<div key={s.name} className={classNames('col', { disabled })}>
          {disabled && <span className='indicator'>Player #{parseInt(selectedPlayer) + 1}</span>}
          <h2 className='name'>{s.name}</h2>
          <div>
            <div>Money/Science/Materials: {s.startingResources.money}/{s.startingResources.science}/{s.startingResources.materials}</div>
            <div>Trade: {s.tradeRatio}=&gt;1</div>
            <div>Interceptor: {s.buildCost.Interceptor}</div>
            <div>Cruiser: {s.buildCost.Cruiser}</div>
            <div>Dreadnought: {s.buildCost.Dreadnought}</div>
            <div>Starbase: {s.buildCost.Starbase}</div>
            <div>Moves: {s.actions.moves}</div>
            <div>Builds: {s.actions.builds}</div>
            <div>Upgrades: {s.actions.upgrades}</div>
          </div>
          <input disabled={disabled} type="image" alt="avatar" className="avatar" src={s.avatar} onClick={() => toggleSelected(s.name)} />
        </div>);
      }
      )}
    </div>
  </>);
};