// 三項演算子を使って、obj.foo が undefined でない場合はその値を代入し、
// undefined の場合はデフォルト値 500 を代入する
const foo = obj.foo !== undefined ? obj.foo : 500;