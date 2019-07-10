import React, { Component } from 'react'
import Item from "../prototypes/Item";
import { findItemById } from '../helpers/actionsListItem';
import ListItem from '../components/ListItem/ListItem';

export default class ListItemContainer extends Component {
    state = {
        listItem: [
            new Item(1, "Milk", 0, 3.2)
        ]
    };

    createOrUpdateItem = (id, title, quantity, price) => () => {
        const {listItem} = this.state;
        const item = findItemById(listItem, id);
        if(item === null) {
            listItem.add(new Item(id, title, quantity, price));
        } else {
            item.updateData(title, quantity, price);
        }
        this.setState({listItem});
    };

    incrementItem = (item) => () => {
        item.increment();
        this.setState({});
    };

    decrementItem = (item) => () => {
        item.decrement();
        this.setState({});
    };

    deleteItem = (item) => () => {
        const {listItem} = this.state;
        const item = findItemById(listItem, item.id);
        if(item !== null) {
            listItem.splice(listItem.indexOf(item), 1);
        }
        this.setState({listItem});
    };

    render() {
        const {listItem} = this.state;
        return (
            <ListItem
                listItem={listItem}
                incrementItem={this.incrementItem}
                decrementItem={this.decrementItem}
            />
        );
    }
};
