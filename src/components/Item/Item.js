import React from 'react'
import PropTypes from 'prop-types'

const Item = ({
    title,
    quantity,
    price,
    increment,
    decrement
}) => {
    return (
        <div>
            <ul>
                <li className="fa fa-plus">
                    <span className='badge badge-primary m-2'>
                        {title}
                    </span>
                </li>
                <li className="fa fa-plus">
                    {(quantity === 0 ? "Out of Stock" : quantity)}
                </li>
                <li className="fa fa-plus">
                    {`${price} MAD`}
                </li>
                <li className="fa fa-plus">
                    <button className="btn btn-secondary btn-sm" onClick={increment}>
                        increment
                    </button>
                </li>
                <li className="fa fa-plus">
                    <button className="btn btn-secondary btn-sm" onClick={decrement}>
                        decrement
                    </button>
                </li>
            </ul>
            <hr />
        </div>
    );
}

// Item.propTypes = {
//     id: Number,
//     title: String,
//     quantity: Number,
//     price: Number,
//     increment: Function,
//     decrement: Function
// }

export default Item;
