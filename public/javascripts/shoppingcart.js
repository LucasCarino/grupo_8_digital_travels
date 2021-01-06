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
storage.forEach(id => {
    let fetchUrl = 'http://localhost:3000/api/birras/' + id;
    fetch(fetchUrl)
    .then(data => data.json())
});
