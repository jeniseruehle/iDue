class List {
    constructor({id, title, archive}) {
        this.id = id
        this.title = title
        this.archive = archive
        List.call.push(this)
    }

    static renderLists() {
        
    }
}