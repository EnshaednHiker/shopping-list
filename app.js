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

// single state object
// var shoppingList = {
//     items:['apples', 'oranges', 'milk', 'bread']
// };
var shoppingList = new ShoppingList (['apples', 'oranges', 'milk', 'bread']);


//state modification functions



//render function
function renderItem (item){
    var itemHTML = '' + item;
    var listItemHTML = '<li class="js-shopping-item"><span class="shopping-item">'+ itemHTML +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span'  + ' class="button-label">delete</span></button></div></li>';   
    
    return $(listItemHTML); 
}
//Event listeners

function addShoppingItem() {
    var htmlItem = "";
    var item = "";
    $('#js-shopping-list-form').submit(function (event) {

        event.preventDefault();

        item = $("#shopping-list-entry").val();
        shoppingList.add(item);
        htmlItem = renderItem(item);

        $('.shopping-list').append(htmlItem);

        console.log(htmlItem);
        $("#shopping-list-entry").val('');
    });
}

function checkItem() {
    var toggleButtonTest = $("ul").on('click', '.shopping-item-toggle', function () {
        //event.preventDefault();
        $(this).closest(".js-shopping-item").find('.shopping-item').toggleClass('shopping-item__checked');
        console.log(toggleButtonTest);
    });
}

function deleteItem() {
    var deleteButtonTest = $("ul").on('click', ".shopping-item-delete", function () {
        //event.preventDefault();
        var thisItem = $(this).closest(".shopping-item").text();
        shoppingList.remove(thisItem);

        $(this).closest(".js-shopping-item").empty();
        $('ul li:empty').remove();
        console.log(shoppingList.get)
    });
}
$(addShoppingItem)
$(checkItem)
$(deleteItem)

