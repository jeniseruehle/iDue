class Item {
    static all = []
    
    constructor(item, itemAttributes) {
        this.id = item.id
        this.name = itemAttributes.name
        this.description = itemAttributes.description
        this.duedate = itemAttributes.duedate
        this.list_id = itemAttributes.list_id
        
        Item.all.push(this)
    }

    static renderItems() {
        return `
            <div data-id=${this.id}>
                <h3>Name: ${this.name}</h3>
                <p>Description: ${this.description}</p>
                <p>Due Date: ${this.duedate}</p>
                <p>List: ${this.list.title}</p>
            </div>
        `;
    }
}