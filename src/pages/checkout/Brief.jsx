import styled from 'styled-components'

const SectionStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: clamp(1rem, 1.5vw, 3rem);
  font-size: clamp(1rem, 1vw, 2rem);
  
 @media screen and (min-width: 64rem) {
  position: sticky;
  top: 0;
 }
`
const BriefHeading = styled('h2')`
  font-size: clamp(1.25rem, 2vw, 4rem);
  font-weight: 800;
`
const BriefDetails = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(.5rem, .5vw, 1rem);
`
const BriefSubHeading = styled('h3')`
  font-size: clamp(1.2rem, 1.2vw, 2.4rem);
  font-weight: 600;
`
const BriefSpan = styled('span')`
  font-size: clamp(1.1rem, 1.1vw, 2.2rem);
  word-break: break-all;
`
const BriefButton = styled('button')`
  color: white;
  font-weight: 700;
  border-radius: 3rem;
  background-color: black;
  padding: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 3vw, 6rem);
`
const BriefDescription = styled('p')`
  text-align: center;
`
const Brief = () => {
  return (
    <SectionStyled>
      <BriefHeading>Buyer</BriefHeading>
      <BriefDetails>
        <BriefSubHeading>Name</BriefSubHeading>
        <BriefSpan>davidmedev222</BriefSpan>
        <BriefSubHeading>Email</BriefSubHeading>
        <BriefSpan>davidcatrielmamaniescalera@gmail.com</BriefSpan>
      </BriefDetails>
      <BriefHeading>Total</BriefHeading>
      <BriefDetails>
        <BriefSubHeading>Products</BriefSubHeading>
        <BriefSpan>123</BriefSpan>
        <BriefSubHeading>Price</BriefSubHeading>
        <BriefSpan>$20140</BriefSpan>
      </BriefDetails>
      <BriefButton>Confirm order</BriefButton>
      <BriefDescription>Confirm your purchase order to continue.</BriefDescription>
    </SectionStyled>
  )
}

export { Brief }
