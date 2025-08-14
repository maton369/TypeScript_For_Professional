// 関数 fromKey は "user:◯◯" 形式の文字列から "◯◯" の部分だけを取り出す
// 引数 key の型はテンプレートリテラル型 `user:${T}` で表現されており、
// "user:" に続く部分がジェネリック型 T に推論される
function fromKey<T extends string>(key: `user:${T}`): T {
    // "user:" の長さは 5 文字なので slice(5) でそれ以降を取得
    // 型システムには文字列操作の結果を T 型として確定できないため、明示的に as T を使う
    return key.slice(5) as T;
}

// 呼び出し時 "user:uhyo" から T は "uhyo" と推論される
// よって返り値 user の型も "uhyo" 型になる
const user = fromKey("user:uhyo");