// toString を持つ値の型である（構造的型付け）
// すなわち「toString(): string メソッドを備える任意の値」を受け入れられるである
type HasToString = {
    toString: () => string;
};

// HasToString を受け取り、toString() の結果を文字列に埋め込んで表示する関数である
function useToString1(value: HasToString) {
    // value は toString() を必ず持つと型で保証されているため、安全に呼べるである
    console.log(`value is ${value.toString()}`);
}

// オブジェクトリテラルに toString() を実装して渡す例である
// "value is foo!" と表示されるである
useToString1({
    toString() {
        return "foo!";
    }
});

// 数値 3.14 を渡す例である
// TypeScript/JavaScript の組み込み型（number, boolean, Date など）は Object 由来の toString() を持つため、
// 構造的に HasToString を満たし、呼び出し可能である
// "value is 3.14" と表示されるである
useToString1(3.14);