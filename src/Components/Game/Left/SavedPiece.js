import React from 'react';

import { drawPiece } from '../../../utils';
import SideContainer from '../../Shared/SideContainer';
import { useGameContext } from '../../../Context/Game/Provider';


export default function SidePiece() {
  const [{sidePiece}] = useGameContext();

  return (
    <SideContainer title="Saved piece">
      <div className="saved-piece">
        {drawPiece(sidePiece) ?? 'No piece saved.'}
      </div>
    </SideContainer>
  );
}
