import { css } from 'styled-components'
import { Sizes } from '.'

/*
  PC, Tablet, Mobileそれぞれでコンテンツの幅を指定するためのスタイル
  ヘッダーとボディ部で共通使用するために切り出している
*/
export const layoutWidthStyle = css`
  max-width: ${Sizes.width.index}px;
  width: 70%;
  min-width: calc(${Sizes.breakPoint.tablet} - 30) px;

  @media (max-width: ${Sizes.breakPoint.tablet}px) {
    width: 80%;
    min-width: calc(${Sizes.breakPoint.mobile} - 30) px;
  }

  @media (max-width: ${Sizes.breakPoint.mobile}px) {
    padding: 0;
    width: initial;
    max-width: initial;
  }
`

export default {
  layoutWidthStyle,
}
