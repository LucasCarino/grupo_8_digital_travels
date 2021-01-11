function loadStorage() {
    let storage = localStorage.getItem('shoppingCart');
    if (storage == null) {
        storage = [];
    } else {
        storage = JSON.parse(storage);
    }
    return storage
}

let storage = loadStorage();
let container = document.querySelector('.product__cart');

storage.forEach(id => {
    let fetchUrl = 'http://localhost:3000/api/paquetes/' + id;
    fetch(fetchUrl)
    .then(data => data.json())
    .then(paquete => 
        container.innerHTML +=
        )

});

