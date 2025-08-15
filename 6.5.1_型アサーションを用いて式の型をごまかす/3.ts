function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
    if (users.every(user => user.tag === "human")) {
        // 型を強制的に Human[] とみなしている
        return (users as Human[]).map(user => user.name);
    }
    return undefined;
}