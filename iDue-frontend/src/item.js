class Item {
    
    constructor(item, itemAttributes) {
        this.id = item.id
        this.name = itemAttributes.name
        this.description = itemAttributes.description
        this.duedate = itemAttributes.duedate
        this.list = itemAttributes.list
        this.list_id = itemAttributes.list_id
        Item.all.push(this)
    }

    static renderItems() {
        apiAdapter.getItems()
        .then(items => {
            items.data.forEach(item => {
                let newItem = new Item(item, item.attributes)
                document.querySelector('#item-container').insertAdjacentHTML("beforeend", newItem.renderItemCard())
            })
        })
    }

    renderItemCard() {
        return `
            <div data-id=${this.id}>
                <h3>${this.list.title}</h3>
                <p><b>Name:</b> ${this.name}</p>
                <p><b>Description:</b> ${this.description}</p>
                <p><b>Due Date:</b> ${this.duedate}</p>
                <button data-id=${this.id} type="button" class="remove">Delete</button>
            </div>
        `;
    }

    static createItemForm(e) {
        const itemForm = document.querySelector("#create-item-form")
        itemForm.addEventListener('submit', e => {
            e.preventDefault()
            const nameData = document.querySelector('#name-data').value
            const descriptionData = document.querySelector('#description-data').value
            const duedateData = document.querySelector('#duedate-data').value
            const listID = parseInt(document.querySelector('#lists').value)
            apiAdapter.postItems(nameData, descriptionData, duedateData, listID)
            e.target.reset()
        })
    }

    static deleteItem() {
        let itemContainer = document.querySelector('#item-container')
        itemContainer.addEventListener('click', e => {
            console.log(e.target)
            if (e.target.className === "remove") {
                apiAdapter.fetchDelete(e)
            }
        })
    }


}

Item.all = []