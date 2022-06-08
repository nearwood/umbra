import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from '@nearwood/react-hexgrid';
import { PlayerColors } from './PlayerBoard';
import classNames from 'classnames';

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
  if (!tile || !tile.wormholes) {
    return null;
  }

  return Object.keys(tile.wormholes).map(edge => {
    if (tile.wormholes[edge] === true) {
      switch (edge) {
        default:
          throw new Error("bad edge");
        case "top": return <circle key={edge} cx="0" cy="-8.5" r={wormholeRadius} className="wormhole" />;
        case "tr": return <circle key={edge} cx="7.5" cy="-4.5" r={wormholeRadius} className="wormhole" />;
        case "br": return <circle key={edge} cx="7.5" cy="4.5" r={wormholeRadius} className="wormhole" />;
        case "bot": return <circle key={edge} cx="0" cy="8.5" r={wormholeRadius} className="wormhole" />;
        case "bl": return <circle key={edge} cx="-7.5" cy="4.5" r={wormholeRadius} className="wormhole" />;
        case "tl": return <circle key={edge} cx="-7.5" cy="-4.5" r={wormholeRadius} className="wormhole" />;
      }
    } else {
      return null;
    }
  });
};

const renderInfluence = (ctx, tile) => {
  if (!tile) {
    return null;
  } else if (tile.influence) {
    return <circle cx="0" cy="0" r="2" className={`influence ${PlayerColors[tile.influence]}`} />;
  } else {
    return null; //<circle cx="0" cy="0" r="2" className="influence empty" />;
  }
};

/** TODO Disable when !active or no colony ships */
const renderProduction = (tile, colonize) => {
  if (!tile) {
    return null;
  }

  let count = {
    orange: 0,
    brown: 0,
    pink: 0,
    gray: 0,
  };

  const planets = tile.planets.map((planet, i) => {
    const { color, advanced, colonized } = planet;

    const key = `${color}_${i}_${colonized}`;

    switch (planet.color) {
      case 'orange':
        return <rect key={key} onClick={() => colonize(tile.id, i)} x={-5 + 2.5 * (count[planet.color]++)} y="-6" width="2" height="2" className={classNames(`planet ${color}`, { colonized, advanced })} />;
      case 'brown':
        return <rect key={key} onClick={() => colonize(tile.id, i)} x={-5 + 2.5 * (count[planet.color]++)} y="-3" width="2" height="2" className={classNames(`planet ${color}`, { colonized, advanced })} />;
      case 'pink':
        return <rect key={key} onClick={() => colonize(tile.id, i)} x={-5 + 2.5 * (count[planet.color]++)} y="3" width="2" height="2" className={classNames(`planet ${color}`, { colonized, advanced })} />;
      case 'gray':
        return <rect key={key} onClick={() => colonize(tile.id, i)} x={-5 + 2.5 * (count[planet.color]++)} y="0" width="2" height="2" className={classNames(`planet ${color}`, { colonized, advanced })} />;
      default:
        throw new Error(`Bad planet color: ${planet.color}`);
    }
  });

  return planets;
};

const renderArtifact = (tile) => {
  if (tile && tile.artifact) {
    return <text x="0" y="-1" className='artifact'>✨</text>;
  }

  return null;
};

const renderAncient = (tile) => {
  if (tile && tile.ancient) {
    return <text x="-3" y="2" className='ancient'>👽</text>;
    //return <text className='ancient'>👾</text>;
    //return <text className='ancient'>🛸</text>;
  }

  return null;
};

const renderVP = (tile) => {
  const cx = 2;
  const cy = -3;
  if (tile) {
    return (<g className="vp">
      <polygon x="2" points={`${cx},${cy} ${cx + 2.5},${cy + 1} ${cx + 5},${cy + 0}, ${cx + 5},${cy + 5}, ${cx + 2.5},${cy + 7}, ${cx + 0},${cy + 5}`} />
      <text x="3.5" y="2">4</text>
    </g>
    );
  }

  return null;
};

const hexagonSize = { x: 10, y: 10 };

export const HexMap = ({ props }) => {
  const { G, ctx, moves, isActive } = props;

  return (<>
    <div className='map col'>
      <HexGrid width="100%" height={800} viewBox="-50 -80 100 150">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {Array.isArray(G.sectors) && G.sectors.map(s =>
            <Hexagon key={`${s.pos.q}_${s.pos.r}_${s.pos.s}`} q={s.pos.q} r={s.pos.r} s={s.pos.s} className={`sector ring${s.ring} ${s.tile ? "filled" : "empty"}`} fill={s.tile ? "spiral" : ""}>
              {!s.tile && <Text>{`${s.pos.q}, ${s.pos.r}, ${s.pos.s}`}</Text>}
              {renderAncient(s.tile)}
              {renderVP(s.tile)}
              {renderArtifact(s.tile)}
              {/* <Text>{ringText(s.ring)}</Text> */}
              {renderWormholes(s.tile)}
              {renderInfluence(ctx, s.tile)}
              {renderProduction(s.tile, moves.colonize)}
            </Hexagon>
          )}
        </Layout>
        <Pattern id="spiral" link="spiral.png" size={hexagonSize} />
      </HexGrid>
    </div>
  </>);
};