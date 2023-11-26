const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesleft = squares.every();
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `The winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  return <div></div>;
};

export default StatusMessage;
