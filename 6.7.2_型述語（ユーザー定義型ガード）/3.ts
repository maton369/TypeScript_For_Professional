function isStringOrNumber(value: unknown): value is string | number {
    // 本来は number も許容するべきだが、間違って boolean を判定している
    // しかし、型述語の部分（value is string | number）はコンパイル時の型情報であり、
    // 実際の条件式と一致しているかどうかは TypeScript は検証しない
    return typeof value === "string" || typeof value === "boolean";
}