// BigInt コンストラクタに数値として解釈できない文字列を渡している
// "foooooo" は数字ではないため、BigInt への変換に失敗し、実行時にエラー（RangeError）が発生する
const bigint = BigInt("foooooo");

// ここには到達しない（↑の行で例外がスローされるため）
console.log("bigint is ", bigint);