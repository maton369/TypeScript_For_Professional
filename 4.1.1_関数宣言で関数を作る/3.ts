function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i); // iはnumber型、配列resultに順に追加される
    }

    // エラー発生箇所
    // 関数の戻り値の型は number[] と宣言しているのに、
    // 実際には number 型の値 max を返そうとしているため型不一致エラーになる
    return max; // ❌ 型 'number' を 'number[]' に代入できない
}