export const pieceTypes = ['L', 'J', 'I', 'T', 'O', 'S', 'Z'];


export const getPiece = (type) => {
  switch (type) {
    case 'L':
      return [
        [null, null, 'orange'],
        ['orange', 'orange', 'orange']
      ];

    case 'J':
      return [
        ['cornflowerblue', null, null],
        ['cornflowerblue', 'cornflowerblue', 'cornflowerblue']
      ];

    case 'I':
      return [
        ['turquoise', 'turquoise', 'turquoise', 'turquoise']
      ];

    case 'O':
      return [
        ['yellow', 'yellow'],
        ['yellow', 'yellow']
      ];

    case 'T':
      return [
        [null, 'orchid', null],
        ['orchid', 'orchid', 'orchid']
      ];

    case 'S':
      return [
        [null, 'limegreen', 'limegreen'],
        ['limegreen', 'limegreen', null]
      ];

    case 'Z':
      return [
        ['red', 'red', null],
        [null, 'red', 'red']
      ];

    default: return [];
  };
};

export const getPieceHTML = (piece) => {
  return (
    <div className="piece">
      {getPiece(piece).map((line, i) => (
        <div key={i} className="line">
          {line && line.map((block, j) => (
            <div key={j} className="block" style={{backgroundColor: block ?? 'transparent'}}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export const getRandomPiece = () => {
  const pieces = ['L', 'J', 'I', 'T', 'O', 'S', 'Z'];
  return pieces[~~(Math.random() * pieces.length)];
};
