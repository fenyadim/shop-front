import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IInputProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps

export interface IInput extends TypeInputProps {}
