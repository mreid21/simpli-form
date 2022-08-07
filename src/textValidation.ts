import { Validator } from "./validation"

const isRequired = (text: string) => text === '' ? {error: 'input is required'} : false

const _minLength = (text: string, length: number) => text.length < length ? {error: 'too short'} : false
const minLength = (length: number): Validator<string, [number]> => [_minLength, length]

const _maxLength = (text: string, length: number) => text.length > length ? {error: 'too long'} : false
const maxLength = (length: number): Validator<string, [number]> => [_maxLength, length]

export {isRequired, minLength, maxLength}