function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    // ❌ エラーの原因である：
    // keyof T は string | number | symbol（= PropertyKey）の可能性がある。
    // それを string 変数に代入しようとすると、number/symbol の可能性が残るため代入不可である。
    // const keyName: string = key; // ← ここでエラーになる

    // ✅ 解決策A: 「キー」は本来 PropertyKey なので、その型で受けるである
    const keyName: PropertyKey = key;

    // もし「文字列として使いたい」なら明示的に文字列化するのが正しいである
    const keyNameStr = String(key); // ここで string にできる

    // 以降、必要に応じて keyName / keyNameStr を使い分けるである
    return obj[key];
}