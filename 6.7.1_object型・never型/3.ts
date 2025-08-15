// never 型を受け取る関数である
function useNever(value: never) {
    // never 型は「到達不能・存在しない値」を表す底型（bottom type）である
    // したがって理論上どんな型にも代入可能（サブタイプ関係の最下位）である
    const num: number = value;   // OK である
    const str: string = value;   // OK である
    const obj: object = value;   // OK である

    // value に実際の値は存在しない想定ゆえ、この行に到達するコードは通常書けないはずである
    console.log(`value is ${value}`);
}

// ▼ 呼び出し例（いずれもコンパイルエラーになる）である

// エラー理由: {} は never ではない（値が「ある」ため）ので引数に渡せないである
useNever({});

// エラー理由: 3.14 も never ではないため渡せないである
useNever(3.14);