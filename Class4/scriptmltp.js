function test(arg1, arg2 = 'X') {
    if (typeof arg1 === 'number') {
        for (let i = 0; i < arg1; i++) {
            let square = ""
            for (let j = 0; j < arg1; j++) {
                square = square + arg2
            }
            console.log(square)
        }
    } else if (typeof arg1 === 'undefined') {
        console.log("Missing Size")
    }
}