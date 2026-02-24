export async function fetchProductos(){


const APIROCKET_ECOMMERCE_TOKEN = import.meta.env.APIROCKET_ECOMMERCE_TOKEN;


let queryCards = `query MyQuery {
  Products {
    name
    price
    sizes {
      size
      availability
    }
    defaultVariation {
      id
    }

    id
    variations {
      arrayImages {
        url
      }
      color
      id
    }
    description
  }
  Reviews {
    score
    product {
      name
      id
    }
  }
  TickerTexts {
    text
  }
}







`

 
async function fetchApirocket(query: String) {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${APIROCKET_ECOMMERCE_TOKEN}`
    },
    body: JSON.stringify({query})
  }

  const data = await fetch('https://graphql.apirocket.io', options).then(response => response.json())
  return data
}
let respuesta = (await fetchApirocket(queryCards))


return respuesta;

}