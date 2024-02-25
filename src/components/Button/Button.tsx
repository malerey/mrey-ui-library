type Props = {
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  children?: React.ReactNode
}

export const Button = ({ disabled = false, variant = 'primary', children }: Props) => {
  return (
    <button className={`button button__${variant}`} disabled={disabled}>
      {children}
    </button>
  )
}
