// エラーの原因:
// TypeScriptの設定で "noImplicitAny": true が有効な場合、
// 引数の型を明示しないと暗黙的に any 型になることが禁止されているため発生する。

// 修正版: 引数 num に number 型を明示
const f = (num: number) => num * 2;

console.log(f(10)); // 20 と表示される