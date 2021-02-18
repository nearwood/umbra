
const DiscoveryTiles = () => {
  const tiles = [];

  tiles.push({ name: 'Ancient Cruiser' }, { name: 'Ancient Cruiser' }, { name: 'Ancient Cruiser' });
  tiles.push({ name: 'Ancient Technology' }, { name: 'Ancient Technology' }, { name: 'Ancient Technology' });
  tiles.push({ name: 'Money', value: 8 }, { name: 'Money', value: 8 }, { name: 'Money', value: 8 });
  tiles.push({ name: 'Minerals', value: 6 }, { name: 'Minerals', value: 6 }, { name: 'Minerals', value: 6 });
  tiles.push({ name: 'Science', value: 5 }, { name: 'Science', value: 5 }, { name: 'Science', value: 5 });

  const shipParts = [
    {
      name: 'Axion Computer',
      targeting: 3
    }, {
      name: 'Flux Shield',
      targeting: -3,
      energy: -2
    }, {
      name: 'Shard Hull',
      damage: -3
    }, {
      name: 'Ion Turret',
      damage: 2,
      energy: -1
    }, {
      name: 'Conformal Drive',
      move: 4,
      energy: -2
    }, {
      name: 'Hypergrid Source',
      energy: 11
    },
  ];

  return tiles.concat(shipParts).map(tile => ({ ...tile, vp: 2 }));
};

export default DiscoveryTiles;
