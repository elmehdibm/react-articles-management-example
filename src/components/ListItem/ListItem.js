import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item';

const ListItem = ({
    listItem,
    incrementItem,
    decrementItem
}) => {
    return (
        <div>
            {listItem.map((item) => {
                return (<Item
                    title={item.title}
                    quantity={item.quantity}
                    price={item.price}
                    increment={incrementItem(item)}
                    decrement={decrementItem(item)}
                />);
            })}
        </div>
    )
}

// ListItem.propTypes = {
//     listItem: Array,
//     incrementItem: Function,
//     decrementItem: Function
// }

export default ListItem;
