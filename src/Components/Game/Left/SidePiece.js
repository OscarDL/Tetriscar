import React from 'react';

import { getPieceHTML } from '../../../utils';
import SideContainer from '../../Shared/SideContainer';
import { useAppContext } from '../../../Context/Provider';


export default function SidePiece() {
  const [{game}] = useAppContext();
  const sidePiece = game.sidePiece;


  return (
    <SideContainer title="Holding">
      <div className="side-piece">
        {sidePiece && getPieceHTML(sidePiece)}
      </div>
    </SideContainer>
  );
}
