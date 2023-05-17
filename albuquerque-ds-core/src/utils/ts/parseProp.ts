export const parseProp = (prop: string, propIsEmpty: boolean) => {
    try {
        if (propIsEmpty) {
            return true
        }
        
        const parsedProp = JSON.parse(prop as unknown as string)

        return parsedProp
    } catch (err) {
        console.error('error', err)
        return false
    }
}