enum ChessPieces {
    KING,
    QUEEN,
    BISHOP,
    ROOK,
    KNIGHT = 12,
    PAWN
}

export function runDemo() {
    let rook = ChessPieces.ROOK;
    console.log(rook);
    console.log(ChessPieces[rook]);

    let knight = ChessPieces.KNIGHT;
    console.log(knight);
    console.log(ChessPieces[knight]);

    stringEnumsDemo();
    constEnumsDemo();
}

enum Beatles {
    John = "John",
    Paul = "Paul",
    George = "George",
    Ringo = "Ringo",
}


function stringEnumsDemo() {
    console.log(Beatles.Paul);

    console.log(Beatles[Beatles.Paul]);
}


const enum FasterChessPieces {
    KING,
    QUEEN,
    BISHOP,
    ROOK,
    KNIGHT = 12,
    PAWN
}

function constEnumsDemo() {
    let rook = FasterChessPieces.ROOK;
    console.log(rook);

    let knight = FasterChessPieces.KNIGHT;
    console.log(knight);

    // The lines below are no longer valid
    // console.log(FasterChessPieces[rook]);
    // console.log(FasterChessPieces[knight]);
}
