export const buttonComponents = ['primary', 'secondary', 'tertiary'] as const

export type HTMLButtonComponentAttribute = typeof buttonComponents[number]

export const buttonType = ['button', 'submit', 'reset'] as const

export type HTMLButtonTypeAttribute = typeof buttonType[number]