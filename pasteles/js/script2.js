const clickbutton = document.querySelectorAll(".btn");
let arraycarrito = [];
clickbutton.forEach((btns) => {
    btns.addEventListener("click", carritoitem);
});
const shopincarditem = document.querySelector(".box-container");

function carritoitem(e) {
    const buton = e.target;
    const item = buton.closest(".card");
    //vamos a guardar esa info en una matriz
    const itemtitlo = item.querySelector(".carditulo").textContent; //esta forma tendremos el contenido
    const itemprece = item.querySelector(".pice").textContent;
    const itemimg = item.querySelector(".imagenes").src;
    console.log(itemtitlo, itemprece, itemimg);
    //el nuevoCarrito donde quedamos un objeto con propiedades que van a se igual a las otras
    /* nuevoItem = {
              title: itemtitlo,
              price: itemprece,
              imagen: itemimg,
          };*/

    addItemCarrito(itemtitlo, itemprece, itemimg);
}

function addItemCarrito(itemtitlo, itemprece, itemimg) {
    const comprarcard = document.createElement("div");
    const comprarcardContenido = `<div class="card box">
    <div class="image">
        <img src="${itemimg}" alt="" class="imagenes">
    </div>
    <div class="content">
        <h3 class="carditulo">
          ${itemtitlo}
        </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam suscipit sed possimus accusamus maiores beatae doloremque modi molestiae ullam minus dolore magni a impedit harum culpa fuga, distinctio sint hic!</p>
        <button class="btn">add to cart</button>
        <span class="pice">${itemprece}</span>
    </div>`;
    comprarcard.innerHTML = comprarcardContenido;
    shopincarditem.append(comprarcard);
    // arraycarrito.push(nuevoItem);
    console.log(arraycarrito);
}

function renderCarrito() {}