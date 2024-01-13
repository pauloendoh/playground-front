import namer from 'color-namer'

export const getColorNameFromHex = (hex: string) => {
  try {
    const names = namer(hex).ntc

    return names[0].name
  } catch (e) {
    return ''
  }
}
