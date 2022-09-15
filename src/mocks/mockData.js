const productos = [
    {id: 1, title: "Remera Tongue", category: "Remeras", price: 3500, pictureUrl: "https://i.postimg.cc/XvK73mV0/REF-7422.jpg", description: 'Remera Talle XL 100% algodón.' },
    {id: 2, title: "Buzo Kongo Violeta", category: "Buzos", price: 9000, pictureUrl: "https://i.postimg.cc/Y26VR7d7/REF-7541.jpg", description:''},
    {id: 3, title: "Remera Not A Dream", category: "Remeras", price: 2900, pictureUrl: "https://i.postimg.cc/mr1pHWP0/REF-7454.jpg", description:''},
    {id: 4, title: "Remera Buenos Aires",category: "Remeras", price: 3200, pictureUrl: "https://i.postimg.cc/HnbC47V1/REF-7478.jpg", description:''},
    {id: 5, title: "Buzo Kongo Turquesa",category: "Buzos", price: 9000, pictureUrl: "https://i.postimg.cc/yYmTjsc9/REF-7556.jpg", description:''}
]
export const data = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('No se pueden cargar los productos')
      }

    },2000)

  })