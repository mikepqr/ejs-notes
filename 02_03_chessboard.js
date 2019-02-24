let N = 8;
let board = "";
for (let i = 0; i < N; i++) {
    let line = (i % 2 == 0) ? "" : " ";
    while (line.length < N) {
        line += "# "
    }
    if (i != 0) board += "\n";
    board += line;
}
console.log(board);
