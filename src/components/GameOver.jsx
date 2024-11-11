export default function GameOver({ winner, resetHandler }) {
  return (
    <div id="game-over">
      <p>Game Over</p>
      {winner && <p>{winner} won!</p>}
      {!winner && <p> It's a draw!</p>}
      <p>
        <button onClick={resetHandler}>Rematch!</button>
      </p>
    </div>
  );
}
