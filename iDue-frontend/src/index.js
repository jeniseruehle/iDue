document.addEventListener('DOMContentLoaded', () => {
    ItemAdapter.getItems()
    ListAdapter.getLists()

    const createItemForm = document.querySelector("#create-item-form")
    createItemForm.addEventListener("submit", handleCreateForm)

})

function handleCreateForm(e) {
    e.preventDefault()
    const nameData = document.querySelector('#name-data').value
    const descriptionData = document.querySelector('#description-data').value
    const duedateData = document.querySelector('duedate-data').value
    const listID = parseInt(document.querySelector('#lists').value)

    ItemAdapter.fetchItems(nameData, descriptionData, duedateData, listID)
    document.querySelector('#name-data').value = "";
    document.querySelector('#description-data').value = "";
    document.querySelector('duedate-data').value = "";
}