class ListAdapter {
    static endPoint = "http://localhost:3000/lists"
    static getLists() {
        fetch(ListAdapter.endPoint)
        .then(resp => resp.json())
        .then(json => {
            const sorted = document.querySelector("#sorted-list")
            sorted.innerHTML += `<option value="none" selected>Unsorted</option>`
           json.data.forEach(list => {
               const listID = list.id
               const title = list.attributes.title
               const dropdown = document.querySelector("lists")
               dropdown.innerHTML += `<option value="${listID}">${title}</option>`
               sorted.innerHTML += `<option value="${listID}">${title}</option>`
           }); 
        })
        .catch(err => console.log(err))
    }
}