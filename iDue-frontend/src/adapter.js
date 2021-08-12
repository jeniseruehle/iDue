class ApiAdapter {

    constructor() {
        this.itemsURL = 'http://localhost:3000/items'
        this.listsURL = 'http://localhost:3000/lists'
    }

    getItems() {
        return fetch(`${this.itemsURL}`)
        .then(resp => resp.json())
    }

    postItems(name, description, duedate, list_id) {
        const itemInput = {name, description, duedate, list_id}
        fetch(`${this.itemsURL}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(itemInput)
        })
        .then(resp => resp.json())
        .then(item => {
            const itemData = item.data
            const newItem = new Item(itemData, itemData.attributes)
            // const itemCard = document.createElement('div');
            // itemCard.innerHTML = newItem.renderItemCard()
            document.querySelector('#item-container').innerHTML += newItem.renderItemCard()
        })
        .catch(err => console.log(err))
    }

    getLists() {
       return fetch(`${this.listsURL}`)
        .then(resp => resp.json())
    }

    fetchDelete(e) {
        fetch(`${this.itemsURL}/${e.target.dataset.id}`, {
            method: "DELETE"
        })
    }
}