// signNumber 関数
// 引数 type は "plus" または "minus" のみを受け付ける文字列リテラル型
// "plus" の場合は 1 を返し、"minus" の場合は -1 を返す
function signNumber(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
}

// useNumber 関数
// 引数 num は number 型
// 0 より大きければ "plus"、0 より小さければ "minus"、0 なら "zero" を返す
function useNumber(num: number) {
    return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

// ❌ エラー例1
// "uhyo" は "plus" | "minus" 型に含まれないため、signNumber に渡せない
signNumber("uhyo");

// ❌ エラー例2
// "uhyo" は string 型であり、number 型の引数を要求する useNumber に渡せない
useNumber("uhyo");