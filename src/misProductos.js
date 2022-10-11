const products = [
    {
        id: "1",
        titulo: 'Dimensión C-13',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892535/Ricky%20And%20Morty/png-transparent-rick-and-morty-rick-sanchez-rick-and-morty-season-3-adult-swim-rick-and-morty-season-2-episode-rick-and-morty-grass-fictional-character-cartoon_rgaqlg.png',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '2',
        titulo: 'FuckOff',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/Rick-And-Morty-Wallpaper-PNG-Background_flm2nx.png',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '3',
        titulo: 'Cruda realidad',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892535/Ricky%20And%20Morty/kisspng-iphone-x-iphone-8-samsung-galaxy-s8-pixel-2-rick-s-rick-and-morty-5ac464dd5fbf22.6304301515228203173922_df9r3j.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },  {
        id: '4',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '5',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '6',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '7',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '8',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '9',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },
    {
        id: '10',
        titulo: 'RickAdor',
        precio: 'proximamente',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1664892534/Ricky%20And%20Morty/kisspng-rick-sanchez-morty-smith-sticker-clip-art-illustra-rick-and-mortyampquot-stickers-set-for-telegram-5ca5c550b580a8.4181170315543678247434_jptfh2.jpg',
        descripcion:'Después de haber estado desaparecido durante.'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 1000)
    })
}