
export default class Item {
    constructor(id, title, quantity, price){
        this.id = id;
        this.title = title;
        this.quantity =  quantity;
        this.price = price;
    }

    updateData(title, quantity, price){
        this.title = title;
        this.quantity = quantity;
        this.price = price;
    }

    increment(){
        this.quantity++;
    }

    decrement(){
        let newQuantity = this.quantity - 1;
        if(newQuantity < 0){
            newQuantity = 0;
        }
        this.quantity = newQuantity;
    }
}
