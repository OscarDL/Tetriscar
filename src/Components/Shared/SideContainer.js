import React from 'react';


export default function SideContainer({title, children}) {
  return (
    <div className="side-container" style={title ? {} : {marginTop: '1rem'}}>
      {title && (
        <h2 className="side-container__title">{title}</h2>
      )}
      <hr/>

      <div className="side-container__content">
        {children}
      </div>
      <hr/>
    </div>
  );
}
