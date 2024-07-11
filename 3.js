isReverseNumber = (number) => {ns = number.toString();
    return ns.split('').reverse().join('') === ns?  1:0;}
    console.log(isReverseNumber(121), isReverseNumber(12), isReverseNumber(1));
// 1 0 1