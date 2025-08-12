const f = (name: string) => ({ name });
// 推論された型: (name: string) => { name: string }

const g: (name: string) => void = f;
// ❌ エラー: Type '(name: string) => { name: string }' is not assignable to type '(name: string) => void'.
//       Type '{ name: string; }' is not assignable to type 'void'.