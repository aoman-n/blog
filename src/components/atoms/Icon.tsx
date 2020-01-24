import React from 'react'
import Icon from '../../constants/Icon'

type Props = {
  icon: keyof typeof Icon
  fill?: string
  width?: string
}

const colors: { [k in keyof typeof Icon]: string } = {
  GITHUB: '#252A2E',
  TWITTER: '#1da1f2',
  EMAIL: '#ffffff',
}

const Twiiter: React.FC<Props> = ({ icon, fill, width }) => (
  <svg
    x="0px"
    y="0px"
    viewBox={Icon[icon].viewBox}
    fill={fill || colors[icon]}
    width={width}
  >
    <path d={Icon[icon].path}></path>
  </svg>
)

export default React.memo(Twiiter)
