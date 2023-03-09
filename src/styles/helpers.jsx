import { css, keyframes } from 'styled-components'

// ? ANIMATIONS
const view = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
`
// ? DATA ATTRIBUTES
const helpers = css`
  [data-opacity]{
    opacity: 0;
  }
  [data-view=true]{
    animation: ${view} 1500ms ease-in-out forwards;
  }
`

export { helpers }
