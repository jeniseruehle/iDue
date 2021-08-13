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

    static filterLists() {
        let filter = document.querySelector('.search-input')
        let select = document.createElement('select')
        let submit = document.createElement('p')

        select.setAttribute("class", "filter-options")
        submit.innerHTML = "Filter By List"
        filter.appendChild(select, submit)

        apiAdapter.getLists()
        .then(lists => {
            lists.data.forEach(list => {
                let listTitle = document.createElement('option')
                listTitle.setAttribute("value", list.attributes.title)
                listTitle.innerHTML = list.attributes.title
                select.append(listTitle)
            })
        })
    }

    static filterListener() {
        let select = document.querySelector('.filter-options')
        select.addEventListener('change', e => {
            let searchSelect = e.target.value
            let itemCard = document.querySelectorAll('div')
            itemCard.forEach((item) => {
                if (item.innerHTML.indexOf(searchSelect) != -1) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            })
        })
    }
}

List.all = []