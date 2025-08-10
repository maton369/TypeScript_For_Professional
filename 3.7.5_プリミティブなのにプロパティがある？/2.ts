// length プロパティを持つ型を定義
type HasLength = { length: number };

// "foobar" は string 型だが、string 型には length プロパティ（number 型）があるため
// HasLength 型として代入できる
const obj: HasLength = "foobar"; // OK