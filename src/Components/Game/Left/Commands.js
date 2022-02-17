import React from 'react';

import SideContainer from '../../Shared/SideContainer';
import { useSettingsContext } from '../../../Context/Settings/Provider';


export default function Commands() {
  const [{commands}] = useSettingsContext();


  return (
    <SideContainer title="Commands">
      <div className="commands">
        <ul>
          <li>Save piece: <span style={{color: 'gold'}}>{commands.save.name}</span></li>
          <li>Rotate: <span style={{color: 'gold'}}>{commands.rotate.name}</span></li>
          <li>Place: <span style={{color: 'gold'}}>{commands.place.name}</span></li>

          <hr style={{margin: '1rem 0'}}/>

          <li>Down: <span style={{color: 'gold'}}>{commands.down.name}</span></li>
          <li>Left: <span style={{color: 'gold'}}>{commands.left.name}</span></li>
          <li>Right: <span style={{color: 'gold'}}>{commands.right.name}</span></li>
        </ul>
      </div>
    </SideContainer>
  );
}
