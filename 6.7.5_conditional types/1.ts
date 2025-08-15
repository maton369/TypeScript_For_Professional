// 呼び出しモード M に応じて可変長引数タプル型を切り替える条件型である。
// - M が "string" のとき: [string, string]（文字列2つ）
// - それ以外（= "number"）のとき: [number, number, number]（数値3つ）
type RestArgs<M> =
    M extends "string"
    ? [string, string]
    : [number, number, number];

// 関数 func は先頭引数 mode によって残余引数 ...args の型が連動して変わるである。
// ジェネリクス M を "string" | "number" に制約し、RestArgs<M> を対応づける。
function func<M extends "string" | "number">(
    mode: M,
    ...args: RestArgs<M> // mode が "string" なら [string, string]、"number" なら [number, number, number]
) {
    console.log(mode, ...args);
}

// ▼ OK 例（mode と args の型が整合しているため）である
func("string", "uhyo", "hyo"); // M = "string" → args は [string, string]
func("number", 1, 2, 3);       // M = "number" → args は [number, number, number]

// ▼ NG 例（コメントのとおりのコンパイルエラーが発生する）である

// エラー: Argument of type 'number' is not assignable to parameter of type 'string'.
// 理由: mode が "string" なので args は [string, string] であるべきところ、数値を渡しているため不一致である。
func("string", 1, 2);

// エラー: Expected 4 arguments, but got 3.
// 理由: mode が "number" なので合計4引数（先頭の mode + 数値3つ）が必要だが、
//       渡しているのは3引数（うち2つは string）で個数・型ともに不一致である。
func("number", "uhyo", "hyo");