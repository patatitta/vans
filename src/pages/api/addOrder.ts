import type { APIRoute } from 'astro';
export const prerender = false;
export const POST: APIRoute = async function({ request }){
  try {
    console.log("a");
    let {data} = await request.json();
  const APIROCKET_ECOMMERCE_TOKEN = import.meta.env.APIROCKET_ECOMMERCE_TOKEN_READWRITE;

console.log(data);


let queryCards = `mutation MyMutation {
  __typename
  OrdersCreate(input: {order: "${data}"}) {
    id
  }
}

`


 
async function guardarApirocket(query: String) {

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
};






    const result = await guardarApirocket(queryCards);
    
    console.log("Collection created:", result);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Family created successfully',
        data: result 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error: any) {
    console.error("Error creating collection: ", error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Error creating collection',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}