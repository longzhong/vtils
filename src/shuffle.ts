/**
 * 打乱一个数组。
 *
 * @param arr 要打乱的数组
 * @returns 打乱后的数组
 * @see https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/
 */
export default function shuffle<T>(arr: T[]): T[] {
  if (!Array.isArray(arr)) {
    return arr
  }
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const itemAtIndex = newArr[randomIndex]
    newArr[randomIndex] = newArr[i]
    newArr[i] = itemAtIndex
  }
  return newArr
}
