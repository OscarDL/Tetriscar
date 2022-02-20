import React from 'react';

import { drawPiece } from '../../../utils';
import SideContainer from '../../Shared/SideContainer';
import { useGameContext } from '../../../Context/Game/Provider';


export default function NextPiece() {
  const [{play, nextPiece}] = useGameContext();

  return (
    <SideContainer divClass="next-piece" title="Next piece">
      {play && drawPiece(nextPiece)}
    </SideContainer>
  );
}
