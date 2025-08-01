// name が falsy（空文字, null, undefined など）であれば getDefaultName() を呼び出して値を代入
const displayName = name || getDefaultName();