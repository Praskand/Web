isReverseNumber = (number) => {ns = number.toString();
    return ns.split('').reverse().join('') === ns ?  1:0;}
    console.log(isReverseNumber(121), isReverseNumber(12), isReverseNumber(1));
// 1 0 1
longest = (wordList) => { l = wordList[0].length, re = '';
// console.log(l);
	for(i = 1; i < wordList.length; i++) { wi = wordList[i]; if (l < wi.length) {
	    l = wi.length; re = wi;
	} else if (l == wi.length) { re = "null"; }
    // console.log(re);
} return re; }
console.log(longest(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]))