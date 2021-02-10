import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

export const HexMap = ({ props }) => {
  const { G, ctx } = props;

  return (<>
    <div className='board col'>
      <HexGrid width={400} height={400} viewBox="-50 -50 100 100">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} />
          {/* Using pattern (defined below) to fill the hexagon */}
          <Hexagon q={0} r={-1} s={1} />
          <Hexagon q={0} r={1} s={-1} />
          <Hexagon q={1} r={-1} s={0}>
            <Text>1, -1, 0</Text>
          </Hexagon>
          <Hexagon q={1} r={0} s={-1}>
            <Text>1, 0, -1</Text>
          </Hexagon>
          {/* Pattern and text */}
          <Hexagon q={-1} r={1} s={0}>
            <Text>-1, 1, 0</Text>
          </Hexagon>
          <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-2} r={0} s={1} />
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
      </HexGrid>
    </div>
  </>);
};