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

function addShoppingCart(selectedId, e) {
    let storage = loadStorage();
    if (!storage.includes(selectedId)) {
        let newStorage = JSON.stringify([...storage, selectedId]);
        localStorage.setItem('shoppingCart', newStorage);
        e.target.innerText = 'Quitar de mis viajes';
    } else {
        storage = storage.filter(item => item != selectedId);
        e.target.innerText = 'Añadir a mis viajes';
        localStorage.setItem('shoppingCart', JSON.stringify(storage))
    }
}

const shoppingCart = 
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addShoppingCart(id, e);
    console.log(localStorage);
})