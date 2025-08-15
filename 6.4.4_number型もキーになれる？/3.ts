// keyof T と string の共通部分（交差型）だけを K に許可する実装である。
// これにより K は「T のキーのうち文字列キーのみ」に制約される。
function get<T, K extends keyof T & string>(obj: T, key: K): T[K] {
    // K は string に交差で絞られているため、そのまま string 変数に代入できるである
    const keyName: string = key;

    // obj の文字列キー key でプロパティアクセスし、対応する値の型 T[K] を返すである
    return obj[key];
}