import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item';

const ListItem = ({
    listItem,
    incrementItem,
    decrementItem,
    deleteItem,
    createOrUpdateItem,
    itemInput,
    onInputChange
}) => {
    return (
        <div>
            {listItem.map((item) => {
                return (<Item
                    key={item.id}
                    item={item}
                    increment={incrementItem(item)}
                    decrement={decrementItem(item)}
                    remove={deleteItem(item)}
                />);
            })}
                <form
                    className="input-group mb-3"
                    style={{"padding": "8px"}}
                    onSubmit={createOrUpdateItem}
                >
                    <div className="input-group-prepend">
                        <span className="input-group-text">Article</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={itemInput.title}
                        onChange={onInputChange('name')}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Quantity"
                        value={itemInput.quantity}
                        onChange={onInputChange('quantity')}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        value={itemInput.price}
                        onChange={onInputChange('price')}
                    />
                    <input type="submit" className="btn btn-primary" value="Create" />
                </form>
        </div> 
    )
}

// ListItem.propTypes = {
//     listItem: Array,
//     incrementItem: Function,
//     decrementItem: Function
// }

export default ListItem;
