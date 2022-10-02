const products = [
    {
        id: '1',
        titulo: 'RickAdor',
        precio: 'proximamente',
    },
    {
        id: '2',
        titulo: 'RickAdor',
        precio: 'proximamente',
    },
    {
        id: '3',
        titulo: 'RickAdor',
        precio: 'proximamente',
    },  {
        id: '4',
        titulo: 'RickAdor',
        precio: 'proximamente',
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}