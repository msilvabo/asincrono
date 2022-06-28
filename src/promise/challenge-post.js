import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function GeneralData(urlApi,metodo, data){
    const response = fetch(urlApi,{
        method: metodo,
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

// INSERTAR
/*  const data = 
    {
        "title": "Genexus Finally",
        "price": 11223344,
        "description": "El final del camino",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
    }

    GeneralData(`${API}/products/`,'POST',data)
        .then(response => response.json())
        .then(data => console.log(data)); */


// ACTUALIZAR
 const data1 = 
    {
        "title": "Genexus MODIFICADO",
        "price": 777888999
    }

    GeneralData(`${API}/products/238`,'PUT',data1)
        .then(response => response.json())
        .then(data => console.log(data));         


//DELETE
/*     GeneralData(`${API}/products/100`,'DELETE')
        .then(response => response.json())
        .then(data => console.log(data)); */