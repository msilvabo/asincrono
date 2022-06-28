import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const AnotherFn =  async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products/100`);
        const product = await fetchData(`${urlApi}/products/${products.id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

/*         const products = await fetchData(`${urlApi}/products/100`);
        const product = await fetchData(`${urlApi}/products/${products[100]}`);
        const category = await fetchData(`${urlApi}/categories/${prooduct.category.id}`);
 */
        //console.log(products);
        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error){
        console.error(error);
    }
}

AnotherFn(API);