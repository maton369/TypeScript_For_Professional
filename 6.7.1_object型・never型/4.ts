// 戻り値型が never の関数である
function thrower(): never {
    // この関数は必ず例外を投げて終了し、正常に値を返すことがないである
    throw new Error("error!!!!");
}

// ▼ 呼び出し側
// thrower() の戻り値は「決して存在しない値」なので never 型として扱われるである
// 実際には例外が発生し、以降のコードは実行されない
const result: never = thrower();

// never 型はどの型にも代入可能である（理論上値が存在しないため）
// ここでは string 型に代入してもコンパイルエラーにならない
const str: string = result;

// ただし、この行に到達することはない（throw により関数呼び出しが中断されるため）
console.log(str);