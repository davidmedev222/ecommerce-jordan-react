import { Link } from 'react-router-dom'; // ROUTER DOM

const Category = ({ all, year2, year3, year4, year5 }) => {
    return (
        <>
            <div className="category">
                {/* IMAGE */}
                <Link to={'/shop'} className="category-img">
                    <span className="category-span">{all}</span>
                </Link>
                {/* IMAGE */}
                <Link to={`/shop/category/${year2}`} className="category-img">
                    <span className="category-span">{year2}</span>
                </Link>
                {/* IMAGE */}
                <Link to={`/shop/category/${year3}`} className="category-img">
                    <span className="category-span">{year3}</span>
                </Link>
                {/* IMAGE */}
                <Link to={`/shop/category/${year4}`} className="category-img">
                    <span className="category-span">{year4}</span>
                </Link>
                {/* IMAGE */}
                <Link to={`/shop/category/${year5}`} className="category-img">
                    <span className="category-span">{year5}</span>
                </Link>
            </div>
        </>
    );
};

export { Category };
