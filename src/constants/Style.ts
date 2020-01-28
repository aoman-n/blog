import { css } from 'styled-components'
import { Size } from '.'

/*
  PC, Tablet, Mobileそれぞれでコンテンツの幅を指定するためのスタイル
  ヘッダーとボディ部で共通使用するために切り出している
*/
export const layoutWidthStyle = css`
  max-width: ${Size.width.index}px;
  width: 70%;
  min-width: calc(${Size.breakPoint.tablet} - 30) px;

  @media (max-width: ${Size.breakPoint.tablet}px) {
    /* padding: 0 40px; */
    width: 80%;
    min-width: calc(${Size.breakPoint.mobile} - 30) px;
  }

  @media (max-width: ${Size.breakPoint.mobile}px) {
    padding: 0;
    width: initial;
    max-width: initial;
  }
`

export default {
  layoutWidthStyle,
}
