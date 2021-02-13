import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

const ringText = (ring) => {
  switch (ring) {
    default:
    case 0: return '';
    case 1: return 'I';
    case 2: return 'II';
    case 3: return 'III';
  }
}

const wormholeRadius = 1.5;

const renderWormholes = (tile) => {
  if (!tile?.wormholes) {
    return null;
  }

  return Object.keys(tile.wormholes).map(edge => {
    if (tile.wormholes[edge] === true) {
      switch (edge) {
        default:
          throw new Error("bad edge");
        case "top": return <circle cx="0" cy="-8" r={wormholeRadius} className="wormhole" />;
        case "tr": return <circle cx="7" cy="-4" r={wormholeRadius} className="wormhole" />;
        case "br": return <circle cx="7" cy="4" r={wormholeRadius} className="wormhole" />;
        case "bot": return <circle cx="0" cy="8" r={wormholeRadius} className="wormhole" />;
        case "bl": return <circle cx="-7" cy="4" r={wormholeRadius} className="wormhole" />;
        case "tl": return <circle cx="-7" cy="-4" r={wormholeRadius} className="wormhole" />;
      }
    } else {
      return null;
    }
  });
};

const renderInfluence = (tile) => {
  if (!tile) {
    return null;
  } else if (!tile.influence) {
    return <circle cx="0" cy="0" r="2" className="influence empty" />;
  } else {
    return <circle cx="0" cy="0" r="2" className="influence green" />;
  }
}

const hexagonSize = { x: 10, y: 10 };

export const HexMap = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board col'>
      <HexGrid width={400} height={400} viewBox="-50 -50 100 100">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {Array.isArray(G.sectors) && G.sectors.map(s =>
            <Hexagon q={s.pos.q} r={s.pos.r} s={s.pos.s} className={`ring${s.ring} ${s.tile ? "filled" : "empty"}`} fill={s.tile ? "spiral" : ""}>
              <Text>{`${s.pos.q}, ${s.pos.r}, ${s.pos.s}`}</Text>
              {/* <Text>{ringText(s.ring)}</Text> */}
              {renderWormholes(s.tile)}
              {renderInfluence(s.tile)}
            </Hexagon>
          )}
        </Layout>
        <Pattern id="spiral" link="spiral.png" size={hexagonSize} />
      </HexGrid>
    </div>
  </>);
};