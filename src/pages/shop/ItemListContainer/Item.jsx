import { useNavigate } from 'react-router-dom' // HOOKS

const Item = ({ cp, price, imageOne, name }) => {
  const navigate = useNavigate() // NAVIGATE

  const handleNavigate = () => {
    navigate(`/shop/item/${cp}`) // EVENT
  }

  return (
    <article className='card'>
      {/* <!-- PICTURE --> */}
      <picture className='card-picture'>
        {/* <!-- PRICE--> */}
        <span className='card-price'>${price}</span>
        {/* <!-- IMAGE --> */}
        <img src={imageOne} className='card-img' alt={name} />
      </picture>
      {/* <!-- NAME --> */}
      <h4 className='card-name'>{name}</h4>
      {/* <!-- BUTTON --> */}
      <button onClick={handleNavigate} className='card-btn'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z' />
        </svg>
      </button>
    </article>
  )
}

export { Item }
