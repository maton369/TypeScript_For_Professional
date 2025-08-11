// SwapFunc型はオーバーロードされた関数型を定義している
type SwapFunc = {
    // 1つ目の呼び出しシグネチャ: 引数がstringなら戻り値はnumber
    (arg: string): number;
    // 2つ目の呼び出しシグネチャ: 引数がnumberなら戻り値はboolean
    (arg: number): boolean;
};

// 実装例（引数の型によって処理を分ける）
const swapFunc: SwapFunc = (arg: string | number) => {
    if (typeof arg === "string") {
        return arg.length; // stringの場合はnumberを返す
    } else {
        return arg > 0;     // numberの場合はbooleanを返す
    }
};

console.log(swapFunc("Hello")); // 5 と表示される（string → number）
console.log(swapFunc(42));      // true と表示される（number → boolean）