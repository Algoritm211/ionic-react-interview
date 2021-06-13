import { SpecType } from '../types/specialists'

// Group By Key Return type (groupByKey - function)
// eslint-disable-next-line no-unused-vars
type GBKReturnType<key extends string> = {[k in key]?: Array<SpecType>}

export const groupByKey = (array: Array<SpecType>, key: keyof SpecType) => {
  return array
    .reduce((hash, obj) => {
      if (obj[key] === undefined) return hash
      // @ts-ignore
      return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
    }, {} as GBKReturnType<keyof SpecType | 'true' | 'false'>)
}
