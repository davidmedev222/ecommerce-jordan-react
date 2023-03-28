import { maskLeft, maskTop, view } from '@/styles/utils'
import { css } from 'styled-components'

export const attributes = css`
  [data-opacity]{
    opacity: 0;
  }
  [data-view=true]{
    animation: ${view} 1500ms ease-in-out forwards;
  }
  [data-mask-left=true]{
    animation: ${maskLeft} 650ms ease-in-out forwards;
  }
  [data-mask-top=true]{
    animation: ${maskTop} 650ms ease-in-out forwards;
  }
`
