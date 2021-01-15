function loadStorage() {
    let storage = localStorage.getItem('packageCart');
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
    .then(paquete => {
        container.innerHTML +=
        `<article>
        <div class="cart__img">
            <img src="/img/img_travels/${paquete.product.image}" alt="destino">
        </div>
        <div class="cart__desc">
            <h3>${paquete.product.name}</h3>
            <p>${paquete.product.description}</p>
                <h4>${paquete.product.price} ARS Por persona</h4>
                <div class="cart__semitotal">
                <i class="fas fa-user"></i>
                <select name="personas">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>
                <h4>Total $ XXXXX</h4>
            </div>
        </div>
        </article>`
        })
});



