import { keyframes } from 'styled-components'

export const view = keyframes`
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
export const maskLeft = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`
export const maskTop = keyframes`
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`
