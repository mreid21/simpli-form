import { Validator } from "./validation"

const _minLength = (text: string, length: number) => text.length < length ? {error: `must be longer than ${length}`} : false
const minLength = (length: number): Validator<string, [number]> => [_minLength, length]

const _maxLength = (text: string, length: number) => text.length > length ? {error: `must be shorter than ${length}`} : false
const maxLength = (length: number): Validator<string, [number]> => [_maxLength, length]




export {minLength, maxLength}