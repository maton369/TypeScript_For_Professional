type Human = {
    name: string;
    age: number;
};

function useMaybeHuman(human: Human | undefined) {
    // `human` が undefined の場合は `human?.age` も undefined になるため、
    // 推論される型は `number | undefined` になる
    const age = human?.age;
    console.log(age);
}