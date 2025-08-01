const foo = { num: 1234 };   // foo は { num: 1234 } を参照するオブジェクト
const bar = foo;             // bar は foo と同じオブジェクトを参照（代入された）
const baz = { num: 1234 };   // baz は新しく作られたが、内容は同じオブジェクト

console.log(foo === bar);    // true が表示される
// → foo と bar は「同じオブジェクトへの参照」を持っているため true

console.log(foo === baz);    // false が表示される
// → foo と baz は「同じ内容」だが、「異なるオブジェクト参照」なので false