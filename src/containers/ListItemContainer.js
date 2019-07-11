import React, { Component } from 'react'
import Item from "../prototypes/Item";
import { findItemById } from '../helpers/actionsListItem';
import ListItem from '../components/ListItem/ListItem';

export default class ListItemContainer extends Component {
    state = {
        listItem: [
            new Item(1, "Milk", 0, 3.2)
        ],
        itemInput: new Item(0, "", "", "")
    };

    onInputChange = (field) => (event) => {
        const {itemInput} = this.state;
        const {value} = event.target;
        switch(field){
            case 'name':
            itemInput.title = value;
            break;
            case 'quantity':
            itemInput.quantity = value;
            break;
            case 'price':
            itemInput.price = value;
            break;
            default:
            break;
        }
        this.setState({itemInput});
    };

    createOrUpdateItem = (event) => {
        event.preventDefault();
        const {listItem, itemInput} = this.state;
        const item = findItemById(listItem, itemInput.id);
        if(item === null) {
            if(itemInput.title !== "" && itemInput.price !== "") {
                listItem.push(new Item(listItem.length + 1, itemInput.title, itemInput.quantity, itemInput.price));
            }
        } else {
            item.updateData(itemInput.title, itemInput.quantity, itemInput.price);
        }
        this.setState({
            listItem,
            itemInput: new Item(0, "", "", "")
        });
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
        const itemInList = findItemById(listItem, item.id);
        if(itemInList !== null) {
            listItem.splice(listItem.indexOf(itemInList), 1);
        }
        this.setState({listItem});
    };

    render() {
        const {listItem, itemInput} = this.state;
        return (
            <ListItem
                listItem={listItem}
                incrementItem={this.incrementItem}
                itemInput={itemInput}
                decrementItem={this.decrementItem}
                deleteItem={this.deleteItem}
                createOrUpdateItem={this.createOrUpdateItem}
                onInputChange={this.onInputChange}
                itemInput={itemInput}
            />
        );
    }
};
