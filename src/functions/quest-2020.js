
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
    if (arr.length === 0) return []
    if (direction !== 'right' && direction !== 'left') return 'condition of direction is incorrect !!'
    let position = n > arr.length ? n % arr.length : n
    let a1 = [...arr]
    let a2 = [...arr]
    direction === 'right' ? a1.splice(0, position - 1) : a1.splice(position, arr.length)
    direction === 'right' ? a2.splice(position - 1, arr.length) : a2.splice(0, position)
    return direction === 'right' ? [...a1, ...a2] : [...a2, ...a1]
}
exports.SecondMax = (arr) => {
    if (arr.length === 0) return 'Error!'
    let arr_unique = [...new Set(arr)]
    const max = Math.max.apply(null, arr_unique)
    arr_unique.length > 1 && arr_unique.splice(arr_unique.indexOf(max), 1)
    return Math.max.apply(null, arr_unique)
}
exports.FizzBuzz = (n) => {
    let output = [1];
    const map = {
        3: 'Fizz',
        5: 'Buzz',
        15: 'FizzBuzz'
    };
    for (let i = 2; i <= n; i++) {
        const fizz = i % 3 * -1 + 3;
        const buzz = i % 5 + 5;
        const fizzBuzz = fizz * buzz;
        const value = map[fizzBuzz] || map[fizz] || map[buzz] || i;
        output.push(value);
    }
    return output[n - 1];

}