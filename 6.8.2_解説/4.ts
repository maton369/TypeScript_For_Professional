// Option<T> 型は値の有無を hasValue プロパティで判別するユニオン型
type Option<T> =
    | {
        hasValue: true;   // 値を持つ場合
        value: T;         // 実際の値
    }
    | {
        hasValue: false;  // 値を持たない場合
    };