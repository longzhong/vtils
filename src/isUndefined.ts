/**
 * 检查 `value` 是否等于 `undefined`。
 *
 * @param value 要检查的值
 * @returns 是（true）或否（false）
 */
export default function isUndefined(value: any): value is undefined {
  return value === void 0
}
