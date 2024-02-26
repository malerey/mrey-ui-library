export type ButtonProps = {
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size: 'default' | 'small'
  children?: React.ReactNode
}

export const Button = ({ disabled = false, variant = 'primary', size = 'default', children }: ButtonProps) => {
  return (
    <button className={`button button__${variant} button__${size}`} disabled={disabled}>
      {children}
    </button>
  )
}
