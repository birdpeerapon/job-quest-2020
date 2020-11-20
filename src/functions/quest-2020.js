
exports.FibonacciSequence = (n) => {
    let a = 1, respon = 0, temp = 0
    while (n > 0) {
        temp = a;
        a = a + respon;
        respon = temp;
        n--
    }
    return respon

}
exports.ArrayShift = (arr, direction, n) => {
    if (direction !== 'right' && direction !== 'left') return 'condition of direction is incorrect !!'
    let position = n > arr.length ? n % arr.length : n
    let a1 = [...arr]
    let a2 = [...arr]
    direction === 'right' ? a1.splice(0, position - 1) : a1.splice(position, arr.length)
    direction === 'right' ? a2.splice(position - 1, arr.length) : a2.splice(0, position)
    return direction === 'right' ? [...a1, ...a2] : [...a2, ...a1]
}