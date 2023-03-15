import styled from 'styled-components'
import { AccordionItem } from './AccordionItem'

const AccordionUl = styled('ul')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (min-width: 1024px) {
    margin: 0 auto;
    width: 75%;
 }
`

const Accordion = () => {
  const data = [
    {
      id: 1,
      title: 'Where can I see my orders?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    },
    {
      id: 2,
      title: 'How do I log in with Google?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    },
    {
      id: 3,
      title: 'How do I apply a discount coupon?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    },
    {
      id: 4,
      title: "Why don't I see my name on my account?",
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    },
    {
      id: 5,
      title: 'Can I buy if I am from abroad?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    },
    {
      id: 6,
      title: 'Can I update my gmail or password?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    },
    {
      id: 7,
      title: 'Can I update my account name and image?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quia odio in corrupti adipisci nemo et ex nihil quod? Culpa deserunt aliquam aliquid. Neque laborum molestiae accusamus recusandae non ratione!'
    }

  ]

  const accordionItem = data.map((item) => {
    const { id, title, text } = item
    return <AccordionItem key={id} title={title} text={text} />
  })

  return (
    <AccordionUl>
      {accordionItem}
    </AccordionUl>
  )
}

export { Accordion }
