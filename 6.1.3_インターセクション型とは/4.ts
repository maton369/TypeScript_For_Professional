// 交差型(Intersection)の要点：T & U は「T でもあり U でもある」値だけを許すのである。
// つまり Animal & string は「文字列でもあり、かつ {species:string; age:number} でもある」値を
// 同時に満たす必要がある。しかし JavaScript の値は同時に「プリミティブの string」かつ
// 「オブジェクトの Animal」であることはできないため、実質不可能である。

// ❌ エラーになる例1：ただの文字列は Animal の構造を持たない
// エラー: Type 'string' is not assignable to type 'Animal & string'.
//        Type 'string' is not assignable to type 'Animal'.
const cat1: Animal & string = "cat";

// ❌ エラーになる例2：Animal のオブジェクトは string ではない
// エラー: Type '{ species: string; age: number; }' is not assignable to type 'Animal & string'.
//        Type '{ species: string; age: number; }' is not assignable to type 'string'.
const cat2: Animal & string = {
    species: "Felis silvestris catus",
    age: 3
};