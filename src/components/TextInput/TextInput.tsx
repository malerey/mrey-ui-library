import { ReactNode } from 'react'

export interface TextInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder?: string
  value?: number | string
  required?: boolean
  labelText?: string
  disabled?: boolean
  icon: ReactNode
}

export const TextInput = ({ disabled = false, required, labelText, placeholder, icon }: TextInputProps) => {
  return (
    <>
      <input
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-label={labelText}
        disabled={disabled}
        className="input"
      />
    </>
  )
}
