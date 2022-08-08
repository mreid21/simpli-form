import { Validator } from "./validation"




const _clamp = (value: number, min: number, max: number) => (min >= value || value >= max) ? {error: `number must be between ${min} and ${max}`} : false
const clamp = (min: number, max: number): Validator<number, [number, number]> => [_clamp, min, max]


export {clamp}