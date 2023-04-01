import { IconArrowDownZa, IconArrowUpAz, IconMagnifyingGlass } from '@/components'
import { ProductsContext } from '@/pages/shop'
import { useContext, useState } from 'react'
import styled, { css } from 'styled-components'

const SearchOptionsStyled = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  padding: clamp(1rem, 1vw, 2rem) clamp(1rem, 4vw, 8rem);
`
const WrapperSearch = styled('div')`
  font-size: clamp(1rem, 1vw, 2rem);
  flex-grow: 1;
  position: relative;
`
const WrapperMagnifyingGlass = styled('button')`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(50%,-50%);
  width: clamp(1rem, 1.5vw, 3rem);
  height: clamp(1rem, 1.5vw, 3rem);

  & svg {
    fill: black;
  }
`
const InputStyled = styled('input')`
  width: 100%;
  border-radius: clamp(3rem, 3vw, 6rem);
  background-color: rgb(209, 208, 214);
  padding: clamp(.75rem, 1vw, 2rem) clamp(.75rem, 1vw, 2rem) clamp(.75rem, 1vw, 2rem) clamp(2rem, 3vw, 6rem);
  outline: none;
`
const WrapperIcons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(.75rem, 1vw, 2rem);
`
const WrapperIcon = styled('button')`
  width: clamp(2.75rem, 4vw, 7rem);
  height: clamp(2.75rem, 4vw, 7rem);
  background-color: rgb(209, 208, 214);
  border-radius: clamp(1rem, 1vw, 2rem);
  padding: clamp(0.5rem, .5vw, 1rem);
  
  & svg {
    fill: black;
  }

  ${({ isSelected }) => isSelected && css`
    background-color: black;

    & svg {
      fill: white;
    }
  `}
`

const SearchOptions = () => {
  const { inputSearch, handleChange, sortByAscending, sortByDescending } = useContext(ProductsContext)
  const [selectOptions, setSelectOptions] = useState({
    ascending: false,
    descending: false
  })

  const handleSortByAscending = () => {
    sortByAscending()
    setSelectOptions({ ascending: true, descending: false })
  }

  const handleSortByDescending = () => {
    sortByDescending()
    setSelectOptions({ ascending: false, descending: true })
  }

  return (
    <SearchOptionsStyled>
      <WrapperSearch>
        <WrapperMagnifyingGlass><IconMagnifyingGlass /></WrapperMagnifyingGlass>
        <InputStyled onChange={handleChange} value={inputSearch} type='search' name='search' id='search' placeholder='One Multicolor' />
      </WrapperSearch>
      <WrapperIcons>
        <WrapperIcon isSelected={selectOptions.ascending} onClick={handleSortByAscending}><IconArrowUpAz /></WrapperIcon>
        <WrapperIcon isSelected={selectOptions.descending} onClick={handleSortByDescending}><IconArrowDownZa /></WrapperIcon>
      </WrapperIcons>
    </SearchOptionsStyled>
  )
}

export { SearchOptions }
