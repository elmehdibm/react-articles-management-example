import React from 'react'
import PropTypes from 'prop-types'

const Item = ({
    item,
    increment,
    decrement
}) => {
    return (
        <div>
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <h3><span className='badge badge-pill badge-primary'>
                        {item.title}
                    </span>
                    </h3>
                </li>
                <li class="nav-item">
                    {(item.quantity === 0 ? "Out of Stock" : item.quantity)}
                </li>
                <li class="nav-item">
                    {`${item.price} MAD`}
                </li>
                <li class="nav-item">
                    <button className="btn btn-secondary btn-sm" onClick={increment}>
                        increment
                    </button>
                </li>
                <li class="nav-item">
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
