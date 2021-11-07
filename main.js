function add1(){
    let div = document.createElement('div');
    let p = document.createElement('p');
    let bTotal = document.createElement('b');

    p.innerHTML = quantity.value + " " + product.value;
    bTotal.innerHTML = " $ " + parseFloat(quantity.value) * parseFloat(price.value);

    p.appendChild(bTotal);

    div.appendChild(p);

    list.appendChild(div);
}