import React from 'react';

import SideContainer from '../../Shared/SideContainer';
import { useAppContext } from '../../../Context/Provider';


export default function Commands() {
  const [{commands}] = useAppContext();


  return (
    <SideContainer title="Commands">
      <div className="commands">
        <ul>
          <li>Save piece: {commands.save.name}</li>
          <li>Rotate: {commands.rotate.name}</li>
          <li>Place: {commands.place.name}</li>

          <hr style={{margin: '1rem 0'}}/>

          <li>Down: {commands.down.name}</li>
          <li>Left: {commands.left.name}</li>
          <li>Right: {commands.right.name}</li>
        </ul>
      </div>
    </SideContainer>
  );
}
