export const SupplyBoard = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board row'>
      <div className='col'>
        <div id='rounds' className='row'>
          <div>Round:</div>
          <div className='actionCell highlight'>1</div>
          <div className='actionCell'>2</div>
          <div className='actionCell'>3</div>
          <div className='actionCell'>4</div>
          <div className='actionCell'>5</div>
          <div className='actionCell'>6</div>
          <div className='actionCell'>7</div>
          <div className='actionCell'>8</div>
          <div className='actionCell'>9</div>
        </div>
        <div id='researchTree' className='col'>
          <div className='research row'>
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
          </div>
          <div className='research row'>
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
          </div>
          <div className='research row'>
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
            <div className='researchCell' />
          </div>
        </div>
      </div>
      <div classname='col' id='spareParts'>
        Spare parts
        <hr />
        <div>Phase: {ctx.phase}</div>
        <div>Current Player: {ctx.currentPlayer}</div>
      </div>
    </div>
  </>);
};