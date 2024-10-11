const boardDimension = 8;
const allowedMoves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function knightMoves(start, end) {
    let processQueue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (processQueue.length > 0) {
        const [current, path] = processQueue.shift();
        const [x, y] = current;

        if (x === end[0] && y === end[1]) {
            return path;
        }

        for (const [dx, dy] of allowedMoves) {
            const newX = x + dx;
            const newY = y + dy;
            const newPos = [newX, newY];

            if (checkMoveValid(newX, newY) && !visited.has(newPos.toString())) {
                visited.add(newPos.toString());
                processQueue.push([newPos, path.concat([newPos])]);
            }
        }
    }

    return null; 
}

function checkMoveValid(x, y) {
    return x >= 0 && y >= 0 && x < boardDimension && y < boardDimension;
}
