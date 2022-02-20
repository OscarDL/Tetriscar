import React from 'react';

import { drawPiece } from '../../../utils';
import SideContainer from '../../Shared/SideContainer';
import { useGameContext } from '../../../Context/Game/Provider';


export default function SavedPiece() {
  const [{play, savedPiece}] = useGameContext();

  return (
    <SideContainer divClass="saved-piece" title="Saved piece">
      {play && (drawPiece(savedPiece) ?? 'No piece saved.')}
    </SideContainer>
  );
}
