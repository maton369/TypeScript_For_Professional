// 1から100までの合計を求める変数を初期化
let sum = 0;     // 合計値（初期値は0）
let i = 1;       // カウンタ変数（1からスタート）

// i が 100 以下の間、ループを繰り返す
while (i <= 100) {
    sum += i;      // 現在の i を sum に加算
    i++;           // カウンタを1増やす
}

// 合計を出力（1〜100の合計は 5050）
console.log(sum); // 5050 と表示される