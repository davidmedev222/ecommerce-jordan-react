import { AccordionItem } from '@/pages/faq'
import styled from 'styled-components'

const AccordionUl = styled('ul')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);

 @media screen and (min-width: 64rem) {
    margin: 0 auto;
    width: 75%;
 }
`

const Accordion = () => {
  const data = [
    {
      id: 1,
      title: 'Where can I see my orders?',
      text: 'Only users with a created account will be able to view their orders in the account orders section.'
    },
    {
      id: 2,
      title: 'How do I log in with Google or Github?',
      text: 'In the login section, the google and github login options are available.'
    },
    {
      id: 3,
      title: 'How do I apply a discount coupon?',
      text: 'In the gifts section of your created account you will find all the available coupons to activate'
    },
    {
      id: 4,
      title: "Why don't I see my name on my account?",
      text: 'If you registered with email and password you will have to refresh the screen to see your username.'
    },
    {
      id: 5,
      title: 'Can I buy if I am from abroad?',
      text: 'For the moment we only accept purchases in Latin America.'
    },
    {
      id: 6,
      title: 'Can I update my gmail or password?',
      text: 'Yes, in the "my account information" section of your account you have the option to update your gmail or password.'
    },
    {
      id: 7,
      title: 'Can I update my account name and image?',
      text: 'Yes, in the my account information section of your account you have the option to update your image and username.'
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
