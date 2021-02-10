import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';


export const HexMap = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board col'>
      <HexGrid width={400} height={400} viewBox="-50 -50 100 100">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {Array.isArray(G.map) && G.map.map(({ pos }) =>
            <Hexagon q={pos.q} r={pos.r} s={pos.s} fill="pat-1">
              <Text>{`${pos.q}, ${pos.r}, ${pos.s}`}</Text>
            </Hexagon>
          )}
        </Layout>
      </HexGrid>
    </div>
  </>);
};