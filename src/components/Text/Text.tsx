import React, { ReactNode } from 'react'

export type TextProps = {
  variant: 'headingLG' | 'headingMD' | 'headingSM' | 'paragraphLG' | 'paragraphMD' | 'paragraphSM' | 'caption'
  children: ReactNode
}

const Text: React.FC<TextProps> = ({ variant, children }) => {
  return <div className={`text text__${variant}`}>{renderTextElement(variant, children)}</div>
}

const renderTextElement = (variant: TextProps['variant'], children: ReactNode) => {
  switch (variant) {
    case 'paragraphLG':
    case 'paragraphMD':
    case 'paragraphSM':
      return <p>{children}</p>
    case 'caption':
      return <span>{children}</span>
    case 'headingLG':
      return <h1>{children}</h1>
    case 'headingMD':
      return <h2>{children}</h2>
    case 'headingSM':
      return <h3>{children}</h3>
    default:
      return null
  }
}

export default Text
