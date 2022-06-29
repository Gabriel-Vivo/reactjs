export const listadoProdutos=[
	{	id:1,
		category:"Burguer",
		content:"",
		description:"Queso pategrás, tomates marinados, lechuga capuchina y alioli",		
        img:"https://www.denirohamburgueseria.com.ar/img/icon_paticomple.png",		
		name:"PATICOMPLÉ",
		stock:5
		
	},
	{	id:2,
		category:"Burguer",
		content:"",
		description:"Queso provoleta con chimichurri, morcilla, morrón a la plancha, cebolla roja y ketchup ahumado",		
		img:"https://www.denirohamburgueseria.com.ar/img/icon_parrillera.png",		
		name:"PARRILLERA",
		stock:5
		
	},
		{ id:3,
			category:"Burguer",
		content:"",
		description:"Queso reggianito, batata frita, sarza (cebolla, limón, jalapeño, cilantro) y salsa HuancaínaS",		
		img:"https://www.denirohamburgueseria.com.ar/img/icon_cuzcoHatuchay.png",		
		name:"CUZCO HATUCHAY",
		stock:5
		
	},
	{ id:4,
		category:"Bebida",
		content:"",
		description:"COCA COLA LATA X354ML.",		
		img:"https://www.golomax.com.ar/uploads/centum/articles/home/13000628_1.jpg",		
		name:"COCA COLA",
		stock:5
		
	},
	{ id:5,
		category:"Bebida",
		content:"",
		description:"SPRITE LATA X354ML.",		
		img:"https://www.golomax.com.ar/uploads/centum/articles/original/7001415_1.jpg",		
		name:"SPRITE ",
		stock:5
		
	},
	{ id:6,
		category:"Bebida",
		content:"",
		description:"FANTA LATA X354ML.",		
		img:"https://www.golomax.com.ar/uploads/centum/articles/original/13731_1.jpg",		
		name:"FANTA",
		stock:5
		
	},

]



export const getProductById = (id) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(listadoProdutos.length>0){
                resolve(listadoProdutos.find(unProducto => unProducto.id === parseInt(id)))}//recorre el array y nos trae el id solicitado 
            else{
                reject("Sin datos")
            } 
        }, 500);
    })
}
