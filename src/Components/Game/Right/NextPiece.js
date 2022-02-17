import React from 'react';

import { drawPiece } from '../../../utils';
import SideContainer from '../../Shared/SideContainer';
import { useGameContext } from '../../../Context/Game/Provider';


export default function NextPiece() {
  const [{nextPiece}] = useGameContext();

  return (
    <SideContainer title="Next piece">
      <div className="next-piece">
        {drawPiece(nextPiece)}
      </div>
    </SideContainer>
  );
}
