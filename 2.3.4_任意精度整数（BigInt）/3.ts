// ❌ エラー：BigInt 型 (`100n`) と number 型 (`50`) を混在させて加算しようとしている。
// TypeScript（および JavaScript）では、BigInt と number を直接演算することはできない。
// 実行時エラーになる前に、TypeScript が次のような型エラーを検出する：
//
// エラー内容：
// Operator '+' cannot be applied to types 'bigint' and 'number'.
const wrong = 100n + 50;