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
                    item={item}
                    increment={incrementItem(item)}
                    decrement={decrementItem(item)}
                />);
            })}
            <div
                className="input-group mb-3"
                style={{"padding": "8px"}}
            >
                <div className="input-group-prepend">
                    <span className="input-group-text">Article</span>
                </div>
                <input type="text" className="form-control" placeholder="Name" />
                <input type="text" className="form-control" placeholder="Quantity" />
                <input type="text" className="form-control" placeholder="Price" />
                <input type="submit" className="btn btn-primary" value="Create" />

            </div>
        </div> 
    )
}

// ListItem.propTypes = {
//     listItem: Array,
//     incrementItem: Function,
//     decrementItem: Function
// }

export default ListItem;
