import styled, { keyframes } from 'styled-components'

const rotateInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }  
`
const SpinnerStyled = styled('div')`
  position: relative;
  height: 100%;
  width: 100%;
`
const SpinnerItem = styled('div')`
  position: absolute;
  inset: 0;
  margin: auto;
  width: clamp(4rem, 4vw, 8rem);
  aspect-ratio: 1;
  border: clamp(0.5rem, 0.5vw, 1rem) solid;
  border-radius: 100%;
  animation: ${rotateInCircle} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation-delay: ${({ delay }) => delay};
  border-color: #000000 transparent transparent transparent;
`
const Spinner = () => {
  return (
    <SpinnerStyled>
      <SpinnerItem delay='-0.45s' />
      <SpinnerItem delay='-0.3s' />
      <SpinnerItem delay='-0.15s' />
    </SpinnerStyled>
  )
}

export { Spinner }
