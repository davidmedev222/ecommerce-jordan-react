import { Link } from 'react-router-dom' // ROUTER DOM

const Category = ({ year1, year2, year3, year4 }) => {
  return (
    <section className='category'>
      {/* IMAGE */}
      <Link to={`/shop/category/${year1}`} className='category-a'>
        <img
          src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792315/ecommerce-jordan-react/product-10_g5gby9.webp'
          alt='zapatilla jordan'
        />
        <span className='category-span'>{year1}</span>
      </Link>
      {/* IMAGE */}
      <Link to={`/shop/category/${year2}`} className='category-a'>
        <img
          src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792316/ecommerce-jordan-react/product-15_pd73xl.webp'
          alt='zapatilla jordan'
        />
        <span className='category-span'>{year2}</span>
      </Link>
      {/* IMAGE */}
      <Link to={`/shop/category/${year3}`} className='category-a'>
        <img
          src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792316/ecommerce-jordan-react/product-27_lbelzo.webp'
          alt='zapatilla jordan'
        />
        <span className='category-span'>{year3}</span>
      </Link>
      {/* IMAGE */}
      <Link to={`/shop/category/${year4}`} className='category-a'>
        <img
          src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1668792317/ecommerce-jordan-react/product-30_pbny4c.webp'
          alt='zapatilla jordan'
        />
        <span className='category-span'>{year4}</span>
      </Link>
    </section>
  )
}

export { Category }
