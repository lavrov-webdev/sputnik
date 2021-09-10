type CheckType = (value: string) => string | undefined

export const required: CheckType = (value) => {
  if (value) return undefined
  return 'Field is required'
}

type MaxLengthType = (len: number) => CheckType

export const maxLength: MaxLengthType = len => value => {
  if (value.length < len) return undefined
  return `Max length is ${len}`
}

type MinLengthType = (len: number) => CheckType

export const minLength: MinLengthType = len => value => {
  if (value.length >= len) return undefined
  return `Min length is ${len}`
}