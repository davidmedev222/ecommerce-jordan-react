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
const maskLeft = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`
const maskTop = keyframes`
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
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
  [data-mask-left=true]{
    animation: ${maskLeft} 650ms ease-in-out forwards;
  }
  [data-mask-top=true]{
    animation: ${maskTop} 650ms ease-in-out forwards;
  }
`

export { helpers }
