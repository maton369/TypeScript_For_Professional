// obj?.foo["bar"]().baz().hoge の解説

// 1. obj?. → オプショナルチェーン
//    - obj が null または undefined の場合、以降のアクセスは行わず undefined を返す
//    - obj がオブジェクトの場合、次に進む

// 2. foo["bar"]() 
//    - obj.foo の "bar" プロパティを取得し、それが関数であれば実行する
//    - この段階で obj が undefined だった場合は処理を終了（undefinedを返す）

// 3. .baz()
//    - 前の関数呼び出しの戻り値に対して baz() を呼び出す
//    - もし戻り値が null または undefined の場合はここで TypeError になる（オプショナルチェーンはここには使われていない）

// 4. .hoge
//    - baz() の戻り値に対して hoge プロパティを取得
//    - このアクセスも通常のプロパティアクセスなので、対象が null/undefined なら TypeError

// まとめ: オプショナルチェーン ?. が有効なのは最初の obj に対してだけ。
// そのため foo["bar"](), baz(), hoge については通常のアクセスが行われ、null/undefined ならエラーになる。
obj?.foo["bar"]().baz().hoge