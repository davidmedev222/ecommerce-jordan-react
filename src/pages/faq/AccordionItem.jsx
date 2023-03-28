import styled, { css } from 'styled-components'
import { useToggle } from '../../hooks/export'
import { IconIncrease } from '@/components'

const AccordionLi = styled('li')`
  overflow: hidden;
`
const AccordionHeader = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  background-color: #d1d0d6;
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 2vw, 4rem);
  border-radius: 3rem;
`
const AccordionTitle = styled('h2')`
   font-size: clamp(1rem, 1.5vw, 3rem);
   font-weight: 700;
`
const AccordionIcon = styled('button')`
  width: clamp(2.25rem, 2.5vw, 5rem);
  height: clamp(2.25rem, 2.5vw, 5rem);
  aspect-ratio: 1;
  transition: transform 300ms ease-in-out;

  ${({ isActive }) => isActive && css`
    transform: rotate(135deg);
  `}
`
const AccordionParagraph = styled('p')`
  display: none;
  font-size: clamp(.85rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem);

  ${({ isActive }) => isActive && css`
     display: block;
  `}
`

const AccordionItem = ({ title, text }) => {
  const { isToggle, toggle } = useToggle()

  return (
    <AccordionLi>
      <AccordionHeader onClick={toggle}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon isActive={isToggle}><IconIncrease /></AccordionIcon>
      </AccordionHeader>
      <AccordionParagraph isActive={isToggle}>{text}</AccordionParagraph>
    </AccordionLi>
  )
}

export { AccordionItem }
