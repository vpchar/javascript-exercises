const fibonacci = function(n) {
    return n < 0 ? 'OOPS'
        : n < 1 ? 0
        : n >0 && n< 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
};

// Do not edit below this line
module.exports = fibonacci;
