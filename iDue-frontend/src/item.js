class Item {
    
    constructor({id, name, description, duedate, list_id}) {
        this.id = id
        this.name = name
        this.description = description
        this.duedate = duedate
        this.list_id = list_id
        Item.all.push(this)
    }

    static renderItems() {
        
    }
}