export const hexIsLight = (hex: string) => {
  if (hex.includes('rgba')) {
    const [r, g, b] = hex
      .replace(/rgba?\(|\s+|\)/g, '')
      .split(',')
      .slice(0, 3)
      .map(Number)

    return r * 0.299 + g * 0.587 + b * 0.114 > 186
  }

  const [r, g, b] =
    hex
      .replace('#', '')
      .match(/.{1,2}/g)
      ?.map((x) => parseInt(x, 16)) ?? []

  return r * 0.299 + g * 0.587 + b * 0.114 > 186
}
