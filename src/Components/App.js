import Board from './Game/Board';
import Combo from './Game/Right/Combo';
import Score from './Game/Right/Score';
import Commands from './Game/Left/Commands';
import SidePiece from './Game/Left/SidePiece';
import NextPiece from './Game/Right/NextPiece';

import './App.css';


export default function App() {
  return (
    <div className="app">
      <div className="left">
        <SidePiece/>
        <Commands/>
      </div>

      <Board/>

      <div className="right">
        <NextPiece/>
        <div>
          <Score/>
          <Combo/>
        </div>
      </div>
    </div>
  );
};
