import { Expose } from 'class-transformer'
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator'

type IsStringParams = Parameters<typeof IsString>
export function IsStringExpose(...options: IsStringParams) {
  return function (target: any, key: string) {
    Expose()(target, key)
    IsString(...options)(target, key)
  }
}

export function IsDateStringExpose(...options: IsDateStringParams) {
  return function (target: any, key: string) {
    Expose()(target, key)
    IsDateString(...options)(target, key)
  }
}

type IsDateStringParams = Parameters<typeof IsDateString>

// create a wrapper for IsNumberString and Expose
type IsNumberStringParams = Parameters<typeof IsNumberString>
export function IsNumberStringExpose(...options: IsNumberStringParams) {
  return function (target: any, key: string) {
    Expose()(target, key)
    IsNumberString(...options)(target, key)
  }
}

// create a wrapper for IsArray and Expose
type IsArrayParams = Parameters<typeof IsArray>
export function IsArrayExpose(...options: IsArrayParams) {
  return function (target: any, key: string) {
    Expose()(target, key)
    IsArray(...options)(target, key)
  }
}

// create a wrapper for IsNumber and Expose
type IsNumberParams = Parameters<typeof IsNumber>
export function IsNumberExpose(...options: IsNumberParams) {
  return function (target: any, key: string) {
    Expose()(target, key)
    IsNumber(...options)(target, key)
  }
}
