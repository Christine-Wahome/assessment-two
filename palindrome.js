const palindrome = (str) => {
    const lowerCaseStr = str.toLowerCase() 
    const word = lowerCaseStr.split('').reverse().join('')
    console.log(lowerCaseStr == word)
}

palindrome('mum mum')