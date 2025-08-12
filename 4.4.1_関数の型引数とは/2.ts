// ❌ NG: string は具体的な型であり、型パラメータ名として使えない
function repeat<string>(element: string, length: number): string[] {
    return Array(length).fill(element);
}