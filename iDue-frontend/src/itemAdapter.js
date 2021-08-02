class ItemAdapter {
    static endPoint = "http://localhost:3000/items"
    
    static getItems(e) {
        fetch(ItemAdapter.endPoint)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            const items;
            if(!e || e.target.value === "none") {
                items = json.data
            }
            else {
                items = json.data.filter(i => i.attributes.list_id === Number(e.target.value))
            }
            document.querySelector('#item-container').innerHTML = ""
            items.forEach(item => {
                let newItem = new Item(item, item.attributes)
                const itemCard = document.createElement('div');
                itemCard.innerHTML = newItem.renderItems()
                document.querySelector('#item-container').prepend(itemCard)
            });

        })
    }

    static fetchItems(name, description, duedate, list_id) {
        const itemInput = {name, description, duedate, list_id}
        fetch(ItemAdapter.endPoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(itemInput)
        })
        .then(resp => resp.json())
        .then(item => {
            const itemData = item.data
            const newItem = new Item(itemData, itemData.attributes)
            const itemCard = document.createElement('div');
            itemCard.innerHTML = newItem.renderItemCard()
            document.querySelector('#item-container').prepend(itemCard)
        })
        .catch(err => console.log(err))
    }
}