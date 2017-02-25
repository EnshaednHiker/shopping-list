'use strict';

var ShoppingList = function (items) {
    var _items = items || []
    this.remove = removeItem.bind(_items)
    this.add = addItem.bind(_items)
    this.get = getItem.bind(_items) 
    return this
}

function addItem (singleItem){
    this.push(singleItem);
    
} 

function removeItem (singleItem){
    var indexPosition = this.indexOf(singleItem);
    this.splice(indexPosition, 1);
}

function getItem (){
    return this;
}

function isItemInList (item){
    return (this.indexOf(item) !== -1)
    
}

