
function getPrice() 
{
    var price = document.getElementById('price__value').innerHTML;
    var priceNumber = price.replace(/\D/g,'');
    var select = document.getElementById('select__value').value;
    var result = document.getElementById('total__result').innerHTML;
    var resultNumber = result.replace(/\D/g,'');

    var total = priceNumber * select;
    console.log(total);

    result.innerHTML = total;
    resultNumber.innerHTML = total;
    
}



