// class List {
    
//     static all = []
    
//     constructor(list, listAttributes) {
//         this.id = list.id
//         this.title = listAttributes.title
//         this.archive = listAttributes.archive
//         this.items = list.items
        
//         List.all.push(this)
//     }

//     static renderLists() {
//         return `
//             <div data-id=${this.id}>
//                 <h3>Title: ${this.title}</h3>
//                 <p>Items: ${this.items}</p>
//             </div>
//         `;
//     }
// }