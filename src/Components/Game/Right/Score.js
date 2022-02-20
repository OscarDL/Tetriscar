import React from 'react';

import SideContainer from '../../Shared/SideContainer';
import { useGameContext } from '../../../Context/Game/Provider';


export default function Score() {
  const [{score}] = useGameContext();

  return (
    <SideContainer divClass="score" title="Score">
      {score}
    </SideContainer>
  );
}
