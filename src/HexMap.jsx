import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';


const generateMap = (outerSectors) => {
  let map = [];
  for (let q = -2; q < 2; ++q) {
    for (let r = -2; r < 2; ++r) {
      let s = q - r;
      //for (let s = 0; s < 2; ++s) {
      map.push(
        <Hexagon q={q} r={r} s={s} fill="pat-1">
          <Text>{`${q}, ${r}, ${s}`}</Text>
        </Hexagon>
      );
      //}
    }
  }

  return map;
};

export const HexMap = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board col'>
      <HexGrid width={400} height={400} viewBox="-50 -50 100 100">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {generateMap(5)}

          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
      </HexGrid>
    </div>
  </>);
};