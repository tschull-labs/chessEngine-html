import { ChessBoard, ChessPiece } from "./lists.js";

let board = new ChessBoard();
let piece = new ChessPiece();

board.initClickListener();

console.log(board);
console.log(piece);
console.table(piece.startPieces);

// board.innerHTML = piece.startPieces[0].symbol;

board.displayPieces(piece.startPieces);
