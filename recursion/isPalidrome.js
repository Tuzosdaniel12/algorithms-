const isPalindrome = (str) => {
    const reverse = (str) => {
        if (str.length === 0)
            return " ";
        return (str[str.length - 1] + reverse(str.substring(0, str.length - 1))).trim();
    };
    const reverseString = reverse(str);
    return str === reverseString;
};
console.log(isPalindrome("awesome"));
console.log(isPalindrome("tacocat"));
//# sourceMappingURL=isPalidrome.js.map