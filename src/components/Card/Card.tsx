import { ReactNode } from 'react'

export type CardProps = {
  hoverEffect?: boolean
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ hoverEffect = false, children }) => {
  return <div className={`card ${hoverEffect && 'card__hover'}`}>{children}</div>
}
