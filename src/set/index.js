const intersection = (...args) => {
    let [arg1, ...rest] = args;

    rest.forEach(arg => {
        arg1 = arg1.filter(el => arg.includes(el))
    })

    return arg1;
} 

module.exports = {
    intersection
}