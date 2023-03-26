// @ts-expect-error -- there's no types for this package
import nearestColor from 'nearest-color'
import colorNameList from 'color-name-list'

// nearestColor need objects {name => hex} as input
console.log({
  colorNameList,
})
const colors = colorNameList.reduce(
  (o, { name, hex }) => Object.assign(o, { [name]: hex }),
  {}
)

const nearest = nearestColor.from(colors)

// get closest named color
nearest('#f1c1d1') // => Fairy Tale

export const getColorNameFromRgb = (rgb: string) => {
  const color = nearest(rgb)
  return color
}
