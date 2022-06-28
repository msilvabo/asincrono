import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fecthData(urlApi){
    return fetch(urlApi);
}

fecthData(`${API}/products`)
    .then(response => response.json())
    .then(products =>{
        console.log('*** PRODUCTO ***:',products[100]);
        return fecthData(`${API}/products/${products[100].id}`)
    })
    .then(response => response.json())
    .then (product => {
        console.log('TITULO: ',product.title);
        return fecthData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log('CATEGORIA :',category.name);
    })
    .catch(error => console.log('ERROR...', error))
 
