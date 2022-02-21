import React from 'react';

import SideContainer from '../../Shared/SideContainer';
import { useGameContext } from '../../../Context/Game/Provider';


export default function Combo() {
  const [{combo}] = useGameContext();

  return (
    <SideContainer divClass="combo">
      <p>Combo: {combo.current}</p>
      <hr style={{margin: '1rem 0'}}/>
      <p>Best combo: {combo.best}</p>
    </SideContainer>
  );
}
