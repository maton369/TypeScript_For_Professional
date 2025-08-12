for (let i = 1; i <= 100; i++) {
    // 3と5の両方で割り切れる場合
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // 3で割り切れる場合
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // 5で割り切れる場合
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // それ以外
    else {
        console.log(i);
    }
}