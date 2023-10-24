

export const uuid = (): string => {
    const randomId = crypto.randomUUID()
    return randomId;
}


