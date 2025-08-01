// `message` はテンプレートリテラル（バッククォート `` ` `` で囲まれた文字列）を用いて定義されている。
// テンプレートリテラルでは、改行をそのまま含めることができるため、
// `message` には複数行の文字列 "Hello\nworld!" が格納される。
const message: string = `Hello
world!`;

// `message` の内容をコンソールに出力する。
// 出力は改行を含む文字列となる。
console.log(message);