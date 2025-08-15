function getFirstFiveLetters(strOrNum: string | number) {
    // ここでは as string を使って「string型である」とコンパイラに伝えているが、
    // 実行時には number も渡される可能性があるため型安全ではないである。
    const str = strOrNum as string;

    // slice は string に対しては問題なく動くが、
    // 実際に number が渡された場合は Number 型には slice メソッドがないため
    // 実行時エラー（TypeError）が発生するである。
    return str.slice(0, 5);
}

// これは正常動作する例である
console.log(getFirstFiveLetters("uhyohyohyo")); // "uhyoh"

// これはコンパイルは通るが、ランタイムでエラーになる例である
console.log(getFirstFiveLetters(123)); // ❌ TypeError: str.slice is not a function