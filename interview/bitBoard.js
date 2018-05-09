const DIM = 8, UTYPE = 16, board = new Uint16Array(DIM);

class Board {
    constructor(board) {
        this._board = board || new Uint16Array(DIM);
    }
    getStatus(i, j) {
        if (i >= 0 && i < DIM && j >= 0 && j < DIM) {
            let value = this._board[i],
                start = j * 2, end = start + 1,
                leftMove = start,
                rightMove = 14;
            return (value << leftMove) >> rightMove;
        }
        return;
    }
}

function getStatus(i,j) {
    if (i >= 0 && i < DIM && j >= 0 && j < DIM) {
        return (board[i] << (j * 2)) >> 14;
    }
    return;
}