// 2つのstring型引数を受け取り、boolean型を返す関数型を定義
type F2 = (arg: string, arg2: string) => boolean;

// これはエラーになる例
// 理由:
// - F2 は引数の型が (string, string)
// - しかしこの関数は引数の型が number で1つしかない
// - 戻り値も boolean ではなく void（console.log の戻り値）
// つまり、引数の数・型、戻り値の型すべてが一致していない
const fun: F2 = (num: number): void => console.log(num);