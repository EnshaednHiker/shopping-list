/*
// Single state object
var state = {
    items: []
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};

// Event listeners
$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});
*/

//single state object
var shoppingList = {
    items:[]
};

//state modification functions
function addItem (singleItem){
    shoppingList.items.push(singleItem);
} 

function removeItem (singleItem){
    var indexPosition = shoppingList.items.indexOf(singleItem);
    shoppingList.items.splice(indexPosition, 1);
}

function testFunctions (){
    addItem("grapefruit");
    console.log(shoppingList);
    addItem("salad dressing");
    console.log(shoppingList);
    removeItem("grapefruit");
    console.log(shoppingList);
}

testFunctions()




