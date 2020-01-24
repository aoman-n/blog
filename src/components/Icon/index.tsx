import React from 'react'
import Github from './svg/github.svg'
import Twitter from './svg/twitter.svg'

export const icons = {
  github: Github,
  twitter: Twitter,
}

export type IconType = keyof typeof icons

export interface IconProps {
  icon: IconType
  width: number
  fill?: string
}

const Icon: React.FC<IconProps> = ({ icon, width, fill = '#999' }) => {
  return React.createElement(icons[icon], { width, fill })
}

export default Icon
