// 1から100までの数値に対して繰り返し処理を行う
for (let i = 1; i <= 100; i++) {
    // i が3の倍数かつ5の倍数（＝15の倍数）のとき
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // 両方の条件を満たす場合に "FizzBuzz" を表示
    }
    // i が3の倍数のとき
    else if (i % 3 === 0) {
        console.log("Fizz"); // 3の倍数のみの場合に "Fizz" を表示
    }
    // i が5の倍数のとき
    else if (i % 5 === 0) {
        console.log("Buzz"); // 5の倍数のみの場合に "Buzz" を表示
    }
    // 上記いずれの条件にも当てはまらない場合
    else {
        console.log(i); // そのままの数値を表示
    }
}