import { IconError } from '@/components'
import styled from 'styled-components'

const SectionStyled = styled('section')`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 2vw, 4rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

  & svg{
    fill: black;
    width: clamp(7.5rem, 15vw, 30rem);
    height: clamp(7.5rem, 15vw, 30rem);
  }
`
const Heading = styled('h2')`
  font-size: clamp(1.25rem, 2vw, 4rem);
  text-align: center;
`

const ErrorNotFound = ({ message }) => {
  return (
    <SectionStyled>
      <IconError />
      <Heading>{message}</Heading>
    </SectionStyled>
  )
}

export { ErrorNotFound }
