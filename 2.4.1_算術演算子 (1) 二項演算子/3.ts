// string 型の変数に数値のような文字列を代入
const str: string = '123';

// 以下の行では数値（123）と文字列（'123'）の乗算を試みている
// TypeScript では、乗算（*）の右辺は number, bigint, enum, any 型のいずれかでなければならず、string 型は許容されない
// そのため、コンパイル時にエラー TS2363 が発生する
// error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
console.log(123 * str);