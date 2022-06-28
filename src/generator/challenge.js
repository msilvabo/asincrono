import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* AnotherFn (urlApi) {
    const productos = await fetchData(`${urlApi}/products/100`);
    const producto = await fetchData(`${urlApi}/products/${productos.id}`);
    const categoria = await fetchData(`${urlApi}/categories/${producto.category.id}`);
    yield console.log(productos);
    yield console.log(producto.title);
    yield console.log(categoria.name);
}

const i = AnotherFn(API);
i.next();
i.next();
i.next();