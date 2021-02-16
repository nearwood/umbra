const Bot = (G, ctx) => {
  let moves = [];
  switch (ctx.phase) {
    case 'action':
      moves.push({ move: 'pass' });
      break;

    case 'combat':
      moves.push({ move: 'engage' });
      break;

    case 'upkeep':
      moves.push({ move: 'pass' });
      break;

    default:
      break;
  }

  const player = G.data[ctx.currentPlayer];
  if (player.science >= 2) { //TODO player trade ratio
    moves.push({ move: 'trade', args: ['science', 'money'] });
    moves.push({ move: 'trade', args: ['science', 'materials'] });
  }

  if (player.materials >= 2) {
    moves.push({ move: 'trade', args: ['materials', 'science'] });
    moves.push({ move: 'trade', args: ['materials', 'money'] });
  }

  if (player.money >= 2) {
    moves.push({ move: 'trade', args: ['money', 'science'] });
    moves.push({ move: 'trade', args: ['money', 'materials'] });
  }

  return moves;
};

export default Bot;