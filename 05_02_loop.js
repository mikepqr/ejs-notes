function loop(init, predicate, update, action) {
    let i = init;
    while (predicate(i)) {
        action(i)
        i = update(i)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
