import React from 'react'
import Github from './svg/github.svg'
import Twitter from './svg/twitter.svg'
import Tag from './svg/tag.svg'
import Clock from './svg/clock.svg'
import { Color } from '../../constants'

export const icons = {
  github: Github,
  twitter: Twitter,
  tag: Tag,
  clock: Clock,
}

export type IconType = keyof typeof icons

export interface IconProps {
  icon: IconType
  width: number
  fill?: string
}

const Icon: React.FC<IconProps> = ({ icon, width, fill = Color.font.base }) => {
  return React.createElement(icons[icon], { width, fill })
}

export default Icon
