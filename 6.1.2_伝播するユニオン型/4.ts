type MaybeFunc =
    // 文字列を受け取り文字列を返す関数型である
    | ((str: string) => string)
    // ただの文字列型である（関数ではない）
    | string;

function useFunc(func: MaybeFunc) {
    // ❌ エラーの理由である：
    // MaybeFunc は「関数」か「文字列」の共用体型であり、
    // その全ての構成要素が呼び出し可能（callable）とは限らない。
    // 具体的には string には「呼び出しシグネチャ」が無いため、
    // func("uhyo") のように関数呼び出しすると型安全でないのでコンパイルエラーとなる。
    const result = func("uhyo");
}