// 出力用の文字列を初期化
let result = "";

// 1から100まで繰り返す
for (let i = 1; i <= 100; i++) {
    // 2回目以降のループでは、要素間にスペースを挿入
    if (i > 1) {
        result += " ";
    }

    // FizzBuzzの判定：3と5両方の倍数であれば "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz";
    }
    // 3の倍数であれば "Fizz"
    else if (i % 3 === 0) {
        result += "Fizz";
    }
    // 5の倍数であれば "Buzz"
    else if (i % 5 === 0) {
        result += "Buzz";
    }
    // どの条件にも当てはまらなければ、数値そのものを文字列に変換して追加
    else {
        result += String(i);
    }
}

// 最終的に構築された文字列を一括出力
console.log(result);