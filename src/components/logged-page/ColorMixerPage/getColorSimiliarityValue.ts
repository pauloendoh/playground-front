// ex: rgba(255, 255, 255, 1)
export const getColorSimiliarityValue = (rgbA: string, rgbB: string) => {
  const rgbAValues = rgbA
    .replace(/[^\d,]/g, '')
    .split(',')
    .map((value) => parseInt(value, 10))
  const rgbBValues = rgbB
    .replace(/[^\d,]/g, '')
    .split(',')
    .map((value) => parseInt(value, 10))

  const rgbADifference = rgbAValues.reduce((acc, value) => acc + value, 0)
  const rgbBDifference = rgbBValues.reduce((acc, value) => acc + value, 0)

  const difference = Math.abs(rgbADifference - rgbBDifference)

  return difference
}
