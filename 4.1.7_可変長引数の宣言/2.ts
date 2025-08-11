// ❌ これはコンパイルエラーになる
// エラー内容: A rest parameter must be of an array type.
// 理由: restパラメータの型は単一型(number)ではなく、配列型(number[])で指定する必要がある
const sum = (...args: number) => {
    // 処理なし
};