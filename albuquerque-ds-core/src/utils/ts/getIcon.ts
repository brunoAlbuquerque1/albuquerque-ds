export const getIcon = (iconName: string) => {
    const iconNormalized = iconName?.split('_').map(name => {
        return String(name?.charAt(0).toUpperCase()) + String(name?.slice(1)) 
    }).join('')

    return iconNormalized
}