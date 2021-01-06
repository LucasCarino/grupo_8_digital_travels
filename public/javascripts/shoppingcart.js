const addButton = document.querySelector('#shoppingcart');
const pathArray = window.location.pathname.split('/');
const id = pathArray[pathArray.length -1];

function loadStorage() {
    let storage = localStorage.getItem('shoppingCart');
    if (storage == null) {
        storage = [];
    } else {
        storage = JSON.parse(storage);
    }
    return storage
}

function addShoppingCart(selectedId) {
    let storage = loadStorage();
    if (storage.includes(selectedId)) {
        
    }
    let newStorage = JSON.stringify([...storage, selectedId]);
    localStorage.setItem('shoppingCart', newStorage);
}

const shoppingCart = 
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addShoppingCart(id);
    console.log(localStorage);
})