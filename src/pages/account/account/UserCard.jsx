import { useAuth } from '@/hooks'
import styled from 'styled-components'

const UserCardStyled = styled('article')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(1rem, 2vw, 4rem);
`
const UserCardImage = styled('img')`
  object-fit: contain;
  width: clamp(5rem, 5vw, 10rem);
  aspect-ratio: 1;
  border-radius: 100%;
`
const UserCardHeader = styled('header')`
  display: flex;
  flex-flow: column wrap;
  gap: clamp(.5rem, .5vw, 1rem);
  word-break: break-all;
`
const UserCardName = styled('h2')`
  font-size: clamp(1.25rem, 1.5vw, 3rem);
  font-weight: 800;
`
const UserCardEmail = styled('h3')`
  font-size: clamp(1rem, 1vw, 2rem);
  color: grey;
`
const UserCard = () => {
  const { user } = useAuth()

  const { photoURL, displayName, email } = user

  const IMAGE_DEFAULT = 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678815873/ecommerce-jordan-react/user/user-anonimo_fy6t5p.png'

  return (
    <UserCardStyled>
      <UserCardImage src={photoURL || IMAGE_DEFAULT} alt='profile image' />
      <UserCardHeader>
        <UserCardName>{displayName || 'example'}</UserCardName>
        <UserCardEmail>{email}</UserCardEmail>
      </UserCardHeader>
    </UserCardStyled>
  )
}

export { UserCard }
