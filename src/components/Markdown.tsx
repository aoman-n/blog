import styled from 'styled-components'
import { Sizes, Colors } from '../constants'

export default styled.div`
  margin-top: 24px;
  line-height: 1.8;
  font-size: ${Sizes.font.s}rem;
  word-break: break-all;

  .hidden {
    display: none;
  }

  pre {
    display: block;
    padding: 10.5px;
    margin: 0 0 11px;
    font-size: ${Sizes.font.ss}rem;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    color: #ffffff;
    background-color: #3e4149;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }

  h1 {
    font-size: 200%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    margin: 30px 0;
    margin-bottom: 10px;
  }

  h1 .emoji {
    width: 36px;
    height: 36px;
  }

  h1 a {
    color: #0a9b94;
  }

  h1 a:hover {
    color: #08837d;
  }

  h2 {
    font-size: 2.0rem;
    margin: 30px 0 16px;
    font-weight: 900;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 4px;
    position: relative;
    &:before {
      position: absolute;
      content: ' ';
      width: 100px;
      bottom: -2px;
      height: 2px;
      background-color: ${Colors.primary};
    }
  }

  h2 .emoji {
    width: 28px;
    height: 28px;
  }

  h2 a {
    color: #0a9b94;
  }

  h2 a:hover {
    color: #08837d;
  }

  h3 {
    margin: 24px 0;
    margin-bottom: 10px;
    font-size: 1.8rem;
    font-weight: 900;
  }

  h3 .emoji {
    width: 22px;
    height: 22px;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 900;
  }

  .markdown > ul,
  .markdown > ol {
    margin: 16px 0;
  }

  ul,
  ol {
    padding-left: 18px;
  }

  li {
    margin: 4px 0;
  }

  li > p {
    margin: 0;
  }

  dt {
    margin-top: 14px;
    margin-bottom: 4px;
  }

  dd {
    padding: 0 14px;
    margin-bottom: 4px;
  }

  p {
    margin: 16px 0;
    line-height: 1.7;
    letter-spacing: 0.13em;
  }

  p img {
    margin-bottom: 0;
  }

  blockquote {
    font-size: ${Sizes.font.s}rem;
    /* color: rgba(60, 74, 96, 0.7); */
    border-left: 5px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    padding: 0 20px;
  }

  blockquote p {
    margin: 10px 0 !important;
  }

  code {
    white-space: pre-wrap;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  pre {
    border: none;
  }

  pre code {
    /* background: #f6f6f6; */
    /* &::selection {
      background: blue;
    } */
  }

  .code-block .highlight {
    border-radius: 4px;
  }

  .code-block__copy-button {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2px 7px;
    font-size: ${Sizes.font.s};
    font-family: 'Lato', Emoji, Arial, 'ヒラギノ角ゴPro W3',
      'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック',
      sans-serif;
  }

  .code-block__copy-button i {
    color: rgba(60, 74, 96, 0.3);
  }

  .code-block__copy-button:hover {
    background-color: #f6f6f6;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .code-block__copy-label::after {
    content: 'Copy';
  }

  .code-block__copy-label.copied::after {
    content: 'Copied';
  }

  .code-block .highlight {
    position: relative;
  }

  .code-block:hover .code-block__copy-button {
    display: block;
  }

  table {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 20px 0;
    margin-bottom: 30px;
  }

  table tr:nth-child(odd) td {
    background-color: #f9f9f9;
  }

  table tr th,
  table tr td {
    padding: 8px;
    line-height: 1.6;
    vertical-align: top;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  strong {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  .anchor {
    transition-duration: 0;
    display: none;
  }

  .anchor svg {
    fill: #08837d;
  }

  .anchor i:hover {
    color: #08837d;
  }

  .anchor .fa-pencil {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  h1,
  h2,
  h3,
  h4 {
    -webkit-font-smoothing: antialiased;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor {
    display: inline-block;
  }

  h2 .anchor {
    font-size: 1.1em;
  }

  h2 .anchor i {
    top: 4px;
  }

  h3 .anchor {
    padding-top: 3px;
    font-size: 1em;
  }

  h3 .anchor i {
    top: 4px;
  }

  .emoji {
    border: none;
  }

  iframe {
    max-width: 100%;
  }

  hr {
    border-top-color: rgba(33, 37, 41, 0.12);
    display: block;
    border-top-width: 1px;
    border-top-style: solid;
    margin: 32px 0;
  }

  .code-filename {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    top: 4px;
    display: inline-block;
    padding: 3px 10px;
    background-color: #3e4149;
    color: #fff;
    font-size: 85%;
    line-height: 1.5;
    margin-bottom: -10px;
  }

  .code-filename i {
    color: rgba(60, 74, 96, 0.3);
  }

  @media (max-width: 900px) {
    video {
      width: 100%;
    }
  }

  .token.function, .token.class-name {
    color: #DBDDA4;
  }

  .token.keyword {
    color: #ebd247;
  }

  .token.operator {
    color: #ff8095;
  }

  .token.string {
    color: #D48E74;
  }

  .token.tag {
    color: #4A9CDB;
  }

  .token.attr-name {
    color: #92DDFF;
  }

  .token.atrule, .token.attr-value {
    color: #D48E74;
  }

  .token.punctuation {
    color: #808080;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  .gatsby-highlight-code-line {
    background-color: #3e416e;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-highlight {
    color: #ffffff;
    background-color: #3e4149;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;

    margin-left: -2rem;
    margin-right: -2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    @media (max-width: ${Sizes.breakPoint.mobile}px) {
      margin-left: -1.3rem;
      margin-right: -1.3rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    /* @media screen and (max-width: ${Sizes.breakPoint.mobile}px) {
      margin-left: calc((100vw - 100%) / -2);
      margin-right: calc((100vw - 100%) / -2);
      padding-left: calc((100vw - 100%) / -2);
      padding-right: calc((100vw - 100%) / -2);
    } */
  }

  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding-left: 2.8em;
  }

  .gatsby-code-title {
    color: #ffffff;
    background-color: #3e4149;
    margin-bottom: -0.65em;
    padding: 1.2rem 1.05rem;
    font-size: 0.8em;
    line-height: 0.2;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-weight: 600;
    border-radius: 2px 2px 0 0;
    display: table;

    position: relative;
    right: 2rem;

    @media (max-width: ${Sizes.breakPoint.mobile}px) {
      right: 1.3rem;
    }
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    color: #fff;
  }
`
