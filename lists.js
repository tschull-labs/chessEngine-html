export class ChessBoard {
  constructor() {
    this.squares = document.querySelectorAll(".boardSquare");
    console.log(this.squares);
  }
  initClickListener() {
    for (let square of this.squares) {
      square.addEventListener("click", () => {
        console.log("clicked ", square);
      });
    }
  }
}

export class ChessPiece {
  constructor() {
    const pieces = [
      { name: "rook", color: "white", symbol: "♖" },
      { name: "knight", color: "white", symbol: "♘" },
      { name: "bishop", color: "white", symbol: "♗" },
      { name: "queen", color: "white", symbol: "♕" },
      { name: "king", color: "white", symbol: "♔" },
      { name: "bishop", color: "white", symbol: "♗" },
      { name: "knight", color: "white", symbol: "♘" },
      { name: "rook", color: "white", symbol: "♖" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      { name: "pawn", color: "white", symbol: "♙" },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { name: "rook", color: "black", symbol: "♜" },
      { name: "knight", color: "black", symbol: "♞" },
      { name: "bishop", color: "black", symbol: "♝" },
      { name: "queen", color: "black", symbol: "♛" },
      { name: "king", color: "black", symbol: "♚" },
      { name: "bishop", color: "black", symbol: "♝" },
      { name: "knight", color: "black", symbol: "♞" },
      { name: "rook", color: "black", symbol: "♜" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
      { name: "pawn", color: "black", symbol: "♟" },
    ];
  }
}
