
export const findItemById = (listItem, id) => {
    let result = null;
    for(var i = 0; i < listItem.length; i++){
        if(listItem[i].id == id) {
            result = listItem[i];
        }
    }
    return result;
};
