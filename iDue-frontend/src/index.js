const apiAdapter = new ApiAdapter()

document.addEventListener('DOMContentLoaded', () => {
    Item.renderItems()
    Item.createItemForm()
    Item.deleteItem()
    List.renderLists()
    List.filterLists()
    List.filterListener()

})

// console.log("testing...")

// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/lists`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));
