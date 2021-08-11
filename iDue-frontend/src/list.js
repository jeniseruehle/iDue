class List {
    
    constructor(list) {
        this.id = list.id
        this.title = list.attributes.title
        this.items = list.attributes.items
        
        List.all.push(this)
    }

    static renderLists() {
        apiAdapter.getLists()
        .then(lists => {
            lists.data.forEach(list => {
                let dropDown = document.querySelector('select')
                let options = document.createElement('option')
                options.setAttribute("value", list.id)
                options.innerHTML = list.attributes.title
                dropDown.append(options)
            })
        })
        .catch(error => console.log(error))
    }
}

List.all = []