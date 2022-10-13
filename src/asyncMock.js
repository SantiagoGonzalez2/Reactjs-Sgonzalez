const products = [
    {
        id: "1",
        titulo: 'Tazón Rick And Morty',
        precio: '2.190',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614283/Reactjs/ricke_xwwgfo.webp',
        descripcion:'Tazón de Rick and Morty! Capacidad: 600 cc.',
        category : 'tazas',
        stock: "11",
    },
    {
        id: '2',
        titulo: 'Taza De Cerámica - Rick And Morty',
        precio: '1.450',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614287/Reactjs/tazon_ozuftk.webp',
        descripcion:'TAZA BLANCA DE PORCELANA IMPORTADA CALIDAD PREMIUM,Apta para microondas y lavavajillas,Medida de la taza 9,6 (alto) x 8,5 cm (Diámetro',
        category : 'tazas',
        stock: 10,
    },
    {
        id: '3',
        titulo: 'Tazón Rick And Morty 500cc',
        precio: '2.190',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614281/Reactjs/1212_wjtf3u.webp',
        descripcion:'Capacidad: 500 cc, CERAMICA',
        category : 'tazas',
        stock: 10,
    },  {
        id: '4',
        titulo: 'Buzo Negro Canguro Hoodier',
        precio: '5.390',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614282/Reactjs/D_NQ_NP_917942-MLA50214348695_062022-O_gfwbvc.webp',
        descripcion:'Bolsillo canguro, suave al tacto , abrigado, capucha doble',
        category : 'indumentaria',
        stock: 10,

    },
    {
        id: '5',
        titulo: 'Pijama Conjunto Rick Y Morty Verano',
        precio: '3.490',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614280/Reactjs/565_jixkka.webp',
        descripcion:'Pijama verano perfecta calidad UNISEX',
        category : 'indumentaria',
        stock: 10,

    },
    {
        id: '6',
        titulo: 'Buzo Luminiscente  Rick And Morty ',
        precio: '5.490',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614280/Reactjs/cscs_a0l73k.webp',
        descripcion:'Después de haber estado desaparecido durante.',
        category : 'indumentaria',
        stock: 10,
    },
    {
        id: '7',
        titulo: 'Temporada 1 completa 4k',
        precio: '2.800',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614282/Reactjs/1_m3_u6rdtr.jpg',
        descripcion:'En esta temporada, pasan por diversas aventuras desde visitar una casa de empeños en el espacio, conocer al diablo en su propia tienda de antigüedades o toparse con realidades virtuales. En un momento, Morty se cansa de las aventuras de su abuelo, así que emprende una supuestamente menos peligrosa.',
        category : 'temporadas',
        stock: 10,
    },
    {
        id: '8',
        titulo: 'Temporada 2 completa 4k', 
        precio: '3.000',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614289/Reactjs/xcYamBmQmSCpl9L1B5ihesnR1Gb_bjplvv.jpg',
        descripcion:'En esta temporada, se enfrentan a parásitos alienígenas, Jerrys alternativos y hasta una dimensión que posiblemente no exista. Además, toda la familia irá a diferentes planetas donde los ciudadanos pueden infringir las normas o asisten a una desafortunada boda.',
        category : 'temporadas',
        stock: 10,
    },
    {
        id: '9',
        titulo: 'Temporada 3 completa 4k', 
        precio: '3.000',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614290/Reactjs/4343_gok9w1.webp',
        descripcion:'El estreno comienza donde se detuvo el final de la segunda temporada, ya que la serie continúa siguiendo las aventuras de los miembros de la familia Smith. La trama de la temporada gira en torno a que Jerry le pide a Beth que elija entre él y Rick, para así poder probar la fortaleza de su matrimonio.',
        category : 'temporadas',
        stock: 10,
    },
    {
        id: '10',
        titulo: 'Temporada 4 completa 4k',
        precio: '4.250',
        img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614289/Reactjs/545_urstqn.webp',
        descripcion:'La cuarta temporada continúa tras el regreso de Jerry, por lo que Rick cree que su poder y estatus en la unidad familiar se ha visto relegado, disminuyendo sus locas hazañas científicas. Sin embargo, las aventuras con su nieto Morty. En éstas, la obsesión por Jessica del joven continúa y pone en peligro sus aventuras.',
        category : 'temporadas',
        stock: 10,
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

export const getProductsByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category ===category))
        }, 500)
    })
}
