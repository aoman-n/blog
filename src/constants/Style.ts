import { css } from 'styled-components'
import { Size } from '.'

/*
  PC, Tablet, Mobileそれぞれでコンテンツの幅を指定するためのスタイル
  ヘッダーとボディ部で共通使用するために切り出している
*/
export const layoutWidthStyle = css`
  max-width: ${Size.width.index}px;

  @media (max-width: ${Size.breakPoint.tablet}px) {
    padding: 0 34px;
  }

  @media (max-width: ${Size.breakPoint.mobile}px) {
    padding: 0 14px;
  }
`

export default {
  layoutWidthStyle,
}
